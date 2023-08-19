import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'
import './ProductsListItem.scss'

interface Props { }



const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h1">
                Products List
            </Typography>


            <Grid container spacing={3}>
                {
                    productsArray.map(({ title, description, type, capacity, price }, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <ProductsListItem
                                    title={title}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
export default ProductList
