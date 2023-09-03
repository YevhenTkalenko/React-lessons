import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductsListItem.scss'
import { Component } from 'react'




interface Props {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

interface State {
    count: number,
    color: string,
    disabled: boolean
}

class ProductsListItem extends Component<Props, State> {

    state = {
        count: 1,
        color: 'green',
        disabled: true
    }

    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
            disabled: false
        }))
        console.log(this.state.count)
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
            disabled: prevState.count - 2 < 1 ? true : false
        }))
        console.log(this.state.disabled)
    }

    onChangeColor = () => {
        this.setState((prevState: State) => ({
            color: prevState.color === 'green' ? 'red' : 'green'
        }))
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className='product-img'>
                        <img src={image} alt="product-img" />
                    </div>
                    <div className="product-title">{title}</div>


                    <p>Color: <span className={this.state.color}>{this.state.color}</span></p>
                    <button onClick={this.onChangeColor}>Change color</button>


                    <div className="product-descr">This is {description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity: {capacity} GB</div>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button variant='outlined' style={{ minWidth: '20px', marginRight: "5px" }} onClick={this.onDecrementClick} disabled={this.state.disabled}>-</Button>
                        <TextField size='small' value={this.state.count}></TextField>
                        <Button variant='outlined' style={{ minWidth: '20px', marginLeft: "5px" }} onClick={this.onIncrementClick}>+</Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }

}


export default ProductsListItem
