import React from 'react'
import {
  Avatar,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Select,
  Typography,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import styles from './Business.module.scss'
import { GroupedProducts, IProduct, ReadBusinessType, ReadMenuType } from '../../../database'
import Loader from '../../components/Loader'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from 'react-router-dom'
import CartButton from '../Cart/components/CartButton'
interface Categories {
  category: string
  productsCount: number
}
interface Props {
  tangoUrl: string
  loading: boolean
  featuredProducts: IProduct[] | undefined
  categories: Categories[] | undefined
  business: ReadBusinessType | undefined
  selectedMenu: ReadMenuType | undefined
  updateSelectedMenu: (e: any) => void
  products: GroupedProducts | undefined
  error: string | undefined
  goBack: () => void
}

/**
 * @Business - View of Landing page to display businesses
 */
const Business = ({
  tangoUrl,
  loading,
  business,
  categories,
  selectedMenu,
  featuredProducts,
  updateSelectedMenu,
  error,
  goBack,
}: Props) => {
  if (error) {
    return <div>No business found...</div>
  }
  if (loading || !business) {
    return <Loader />
  }
  return (
    <main className={styles.main}>
      <section className={styles.headerInfo}>
        <div>
          <img src={business.bannerImageUrl} alt='Banner' className={styles.bannerImage} />
        </div>
        <Fab className={styles.backBtn} onClick={goBack} size='small' data-testid='backBtn'>
          <ArrowBackIcon />
        </Fab>
        <Avatar alt='Profile' src={business.profileImageUrl} className={styles.profileImage} />
        <Grid container spacing={3} className={styles.businessInfo}>
          <Grid item xs={12} className={styles.info}>
            <Typography color='textPrimary' variant='h5' className={styles.businessName}>
              {business.name}
            </Typography>
          </Grid>
          <Grid item xs={6} className={styles.info}>
            <Typography className={styles.businessType} color='textPrimary' variant='body2'>
              {business.type} <span className={styles.bullet}>•</span> Local
            </Typography>
          </Grid>
          <Grid item xs={6} className={`${styles.info} ${styles.menus}`}>
            <Select
              native={true}
              data-testid='menuSelectBox'
              className={styles.menusSelectBox}
              value={selectedMenu ? selectedMenu.id : 0}
              onChange={updateSelectedMenu}
              IconComponent={() => <KeyboardArrowDownIcon />}
            >
              {business.menus.map((menu, i) => {
                return (
                  <option key={i} value={menu.id}>
                    {menu.name}
                  </option>
                )
              })}
            </Select>
          </Grid>
        </Grid>
        <Divider />
      </section>
      <section className={styles.featuredItems}>
        <Grid container spacing={3} className={styles.businessInfo}>
          <Grid item xs={12} className={styles.info}>
            <Typography color='textPrimary' variant='h5' className={styles.title}>
              Featured Items
            </Typography>
            <Typography className={styles.subTitle} color='textPrimary' variant='body2'>
              A few of our favorties - guaranteed to hit the spot.
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.info}>
            <List className={styles.featureList}>
              {featuredProducts &&
                featuredProducts.map(product => {
                  return (
                    <ListItem className={styles.listItem} key={product.id}>
                      <Link
                        to={{ pathname: `/product/${product.id}`, state: business }}
                        className={styles.link}
                      >
                        <CardActionArea>
                          <CardMedia
                            component='img'
                            className={styles.productImage}
                            alt={product.name}
                            image={product.image ? product.image : business.profileImageUrl}
                            title={product.name}
                          />
                          <CardContent className={styles.productContent}>
                            <Typography gutterBottom variant='h6' className={styles.productTitle}>
                              {product.name}
                            </Typography>
                            <Typography
                              variant='body2'
                              color='textSecondary'
                              component='p'
                              className={styles.productPrice}
                            >
                              ${product.price}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </ListItem>
                  )
                })}
            </List>
          </Grid>
        </Grid>
        <Divider />
      </section>
      <section className={styles.featuredItems}>
        <Grid container spacing={3} className={styles.businessInfo}>
          <Grid item xs={12} className={styles.info}>
            <Typography color='textPrimary' variant='h5' className={styles.title}>
              Menu Categories
            </Typography>
            <Typography className={styles.subTitle} color='textPrimary' variant='body2'>
              Select a category and see what’s in it
            </Typography>
          </Grid>
          <List dense={false} className={styles.categoriesList}>
            {categories &&
              categories.map((item, index) => {
                return (
                  <ListItem className={styles.categoryItem} key={index}>
                    <ListItemText
                      className={styles.categoryName}
                      primary={item.category}
                      secondary={`${item.productsCount} ${
                        item.productsCount > 1 ? 'Items' : 'Item'
                      }`}
                    />
                    <ListItemText>
                      <Link
                        to={{ pathname: `/category/${tangoUrl}/${item.category}`, state: business }}
                        style={{ textDecoration: 'none' }}
                      >
                        <IconButton edge='end' aria-label='delete' className={styles.arrowIcon}>
                          <ArrowForwardIcon />
                        </IconButton>
                      </Link>
                    </ListItemText>
                  </ListItem>
                )
              })}
          </List>
        </Grid>
      </section>
      <CartButton />
    </main>
  )
}

export default Business
