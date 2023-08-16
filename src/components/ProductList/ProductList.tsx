import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

interface Props {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h1">
                Products List
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Iphone 14 pro"
                        description="iPhone 14 pro"
                        type="phone"
                        capacity="250 GB"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Iphone 13 pro"
                        description="iPhone 13 pro"
                        type="phone"
                        capacity="200 GB"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Iphone 12 pro"
                        description="iPhone 12 pro"
                        type="phone"
                        capacity="150 GB"
                        price={800}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
