import Button from '@mui/material/Button'

interface Props {}
const Menu = (props: Props) => {
    return (
        <>
            <Button style={{ color: 'white' }}>Home</Button>
            <Button style={{ color: 'white' }}>About</Button>
            <Button style={{ color: 'white' }}>Payment</Button>
            <Button style={{ color: 'white' }}>Shipping</Button>
            <Button style={{ color: 'white' }}>Cart</Button>
        </>
    )
}

export default Menu
