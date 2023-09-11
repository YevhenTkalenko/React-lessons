import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Home/Cart/CartPage'

interface Props { }

interface ProductsInCart {
    [id: number]: number
}


const App = (props: Props) => {

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count
        }))
    }

    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 4
    })


    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container>
                <Routes>
                    <Route path='/' element={<Home addProductToCart={addProductToCart} />} />
                    <Route path='cart' element={<CartPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
