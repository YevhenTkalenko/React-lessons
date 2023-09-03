import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import './Header.scss'
import CartHeader from 'components/CartHeader/CartHeader'

interface Props {
    cartData: {
        totalCount: number,
        totalPrice: number
    }
}



const Header = ({ cartData }: Props) => {
    return (
        <AppBar position="static" className="header_container">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader cartData={cartData} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
