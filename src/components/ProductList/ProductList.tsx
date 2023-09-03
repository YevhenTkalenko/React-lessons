import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'
import './ProductsListItem.scss'

interface Props {
    addProductToCart: (count: number, price: number) => void
}



const ProductList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h1">
                Products List
            </Typography>


            <Grid container spacing={3}>
                {
                    productsArray.map(({ id, title, description, type, capacity, price, image }) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ProductsListItem
                                    addProductToCart={addProductToCart}
                                    title={title}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                    image={image} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
export default ProductList
