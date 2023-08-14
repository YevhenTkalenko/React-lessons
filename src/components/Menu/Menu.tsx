import Button from '@mui/material/Button'
import './Menu.scss'

interface Props {}
const Menu = (props: Props) => {
    return (
        <>
            <Button className="menu_btn">Home</Button>
            <Button className="menu_btn">About</Button>
            <Button className="menu_btn">Payment</Button>
            <Button className="menu_btn">Shipping</Button>
            <Button className="menu_btn">Cart</Button>
        </>
    )
}

export default Menu
