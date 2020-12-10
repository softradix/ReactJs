import React from 'react'
import Business from './index'
import { businessWithProducts } from './../../../database/testData'
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { fireEvent, screen } from '@testing-library/dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { getByTangoUrl } from './../../../database/Business/index'
const mockBusiness = { ...businessWithProducts }
jest.mock('react-router-dom', () => {
  const modules = jest.requireActual('react-router-dom')
  return {
    __esModule: true,
    ...modules,
    useParams: jest.fn().mockReturnValue({ tangoUrl: 'mybusiness' }),
    useHistory: () => ({
      goBack: jest.fn(),
    }),
  }
})
jest.mock('./../../../database/Business/index')
beforeEach(() => {
  ;(getByTangoUrl as jest.Mock).mockClear()
})
describe('Render Business Home Page', () => {
  test('Render Business Data', async () => {
    ;(getByTangoUrl as jest.Mock).mockReturnValue({ data: mockBusiness, isError: false })
    const { getByRole, getByTestId } = render(
      <Router>
        <Business />
      </Router>,
    )
    const loader = getByRole('progressbar')
    await waitFor(() => expect(loader).toBeInTheDocument())
    // check if loader is closed after data came
    waitForElementToBeRemoved(loader).then(loaderContent => {
      expect(loaderContent).toBeUndefined()
    })
    const selectBox = getByTestId('menuSelectBox')
    const selectNode = selectBox.childNodes[0].childNodes[0]
    fireEvent.change(selectNode, { target: { value: '9fcBzXivxS8QDEDtCr6j' } })
    fireEvent.click(screen.getByTestId('backBtn'))
  })

  // test('Render Error', async () => {
  //   (getByTangoUrl as jest.Mock).mockReturnValue({ error: "Menus are not found", isError: true})
  //   const { getByRole } = render(<Business />)
  //   const loader = getByRole('progressbar')
  //   await waitFor(() => expect(loader).toBeInTheDocument())
  //   // check if loader is closed after data came
  //   waitForElementToBeRemoved(loader).then(loaderContent => {
  //     expect(loaderContent).toBeUndefined()
  //   })
  // })
})
