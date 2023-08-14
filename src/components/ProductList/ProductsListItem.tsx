import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

interface Props {}
const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">iPhone 14 pro</div>
                <div className="product-descr">This is iPhone 14 pro</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 250 GB</div>
                <div className="product-price">1200$</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
