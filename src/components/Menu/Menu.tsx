import Button from '@mui/material/Button'
import './Menu.scss'
import { Link } from 'react-router-dom'

interface Props { }
const Menu = (props: Props) => {
    return (
        <>
            <Button className="menu_btn">
                <Link to='/'>Home</Link>
            </Button>
            <Button className="menu_btn">About</Button>
            <Button className="menu_btn">Payment</Button>
            <Button className="menu_btn">Shipping</Button>
            <Button className="menu_btn">
                <Link to='/cart'>Cart</Link>
            </Button>
        </>
    )
}

export default Menu
