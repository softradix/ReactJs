import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  Business,
  GroupedProducts,
  IMenu,
  IProduct,
  ReadBusinessType,
  ReadMenuType,
} from '../../../database'
import BusinessView from './Business'
import momentTZ from 'moment-timezone'
import _ from 'lodash'
interface ParamTypes {
  tangoUrl: string
}
interface Categories {
  category: string
  productsCount: number
}
/**
 * @BusinessContoller - All functions related to business which are being used in business page
 */
const BusinessContoller = () => {
  const { tangoUrl } = useParams<ParamTypes>()
  const [loading, setLoading] = useState<boolean>(false)
  const [business, setBusiness] = useState<ReadBusinessType>()
  const [selectedMenu, setSelectedMenu] = useState<ReadMenuType>()
  const [groupedProducts, setGroupedProducts] = useState<GroupedProducts>({})
  const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>()
  const [categories, setCategories] = useState<Categories[]>()
  const [error, setError] = useState<string>()
  const history = useHistory()
  /**
   * @updateSelectedMenu updates selected menu id
   * @param menuId
   */
  const updateSelectedMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredMenu = business?.menus.find(menu => {
      return menu.id === e.target.value ? menu : ''
    })
    setSelectedMenu(filteredMenu)
    filteredMenu && filterProducts(filteredMenu)
  }

  /**
   * @filterProducts grouping products by category
   * @param menus
   */
  const filterProducts = (menus: ReadMenuType) => {
    const groupedProducts = _.groupBy(menus.products, product => product.category)
    const categories = _(groupedProducts)
      .map(function (g, key) {
        return {
          category: key,
          productsCount: g.length,
        }
      })
      .value()
    setCategories(categories)
    setGroupedProducts(groupedProducts)
  }

  /**
   *@goBack
   */
  const goBack = () => {
    history.goBack()
  }

  useEffect(() => {
    const controller = new AbortController()
    /**
     * @fetchBusiness fetching business by tangoUrl
     */
    const fetchBusiness = async () => {
      const result = await Business.getByTangoUrl(tangoUrl)
      controller.abort()
      if (result.data) {
        const currentDate = momentTZ.tz(result.data.timeZone)
        // const currentTime = currentDate.format('HH:mm')
        const currentDay = currentDate.format('dddd').toLowerCase()
        const dayAvailability = (currentDay + 'Availability') as keyof IMenu
        const filteredMenus = result.data.menus.filter(menu => {
          return menu[dayAvailability] ? menu : false
        })
        const productsData = _.flatten(_.map(filteredMenus, 'products'))
        const groupedProducts = _.uniqBy(productsData, 'id')
        const mainFeaturedProduct = _.filter(groupedProducts, 'isMainFeatured')
        setFeaturedProducts(mainFeaturedProduct)
        setBusiness({ ...result.data, menus: filteredMenus })
        setSelectedMenu(filteredMenus[0])
        filterProducts(filteredMenus[0])
        setLoading(false)
      } else {
        setError(result.error)
      }
    }
    setLoading(true)
    fetchBusiness()
  }, [tangoUrl])

  return (
    <BusinessView
      tangoUrl={tangoUrl}
      loading={loading}
      updateSelectedMenu={updateSelectedMenu}
      business={business}
      categories={categories}
      selectedMenu={selectedMenu}
      products={groupedProducts}
      featuredProducts={featuredProducts}
      error={error}
      goBack={goBack}
    />
  )
}
export default BusinessContoller
