import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'
import productProps from 'utils/productsArray'

interface Props { }

interface productProps {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}


const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h1">
                Products List
            </Typography>


            <Grid container spacing={3}>
                {
                    productsArray.map((product: productProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductsListItem
                                title={product.title}
                                description={product.description}
                                type={product.type}
                                capacity={product.capacity}
                                price={product.price}
                            />
                        </Grid>
                    ))

                }
            </Grid>

        </>
    )
}
export default ProductList
