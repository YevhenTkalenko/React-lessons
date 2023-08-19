import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductsListItem.scss'


interface Props {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}


const ProductsListItem = ({ title, description, type, capacity, price, image }: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className='product-img'>
                    <img src={image} alt="product-img" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-descr">This is {description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} GB</div>
                <div className="product-price">{price}$</div>
                <div className="product-quantity">
                    <Button variant='outlined' style={{ minWidth: '20px', marginRight: "5px" }}>-</Button>
                    <TextField size='small' value={1}></TextField>
                    <Button variant='outlined' style={{ minWidth: '20px', marginLeft: "5px" }}>+</Button>
                </div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
