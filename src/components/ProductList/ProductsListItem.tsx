import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'


interface Props {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string

    addProductToCart: (count: number, price: number) => void

}

const ProductsListItem = ({ id, title, description, type, capacity, price, image, addProductToCart }: Props) => {
    const [count, setCount] = useState<number>(1)


    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

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
                    <Button variant='outlined' style={{ minWidth: '20px', marginRight: "5px" }} onClick={() => onDecrement()} disabled={count <= 1}>-</Button>
                    <TextField size='small' value={count}></TextField>
                    <Button variant='outlined' style={{ minWidth: '20px', marginLeft: "5px" }} onClick={() => onIncrement()} disabled={count >= 10}>+</Button>
                </div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined" onClick={() => addProductToCart(id, count)}>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem