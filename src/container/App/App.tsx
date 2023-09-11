import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

interface Props { }

interface ProductsInCart {
    [id: number]: number
}


const App = (props: Props) => {

    const addProductToCart = (count: number, price: number) => { }

    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 4
    })


    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
