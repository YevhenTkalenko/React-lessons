import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

interface Props { }

interface CartDataProps {
    totalCount: number,
    totalPrice: number
}



const App = (props: Props) => {

    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price
        }))
    }


    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            {/* <button onClick={() => addProductToCart(5, 500)}>Add to cart (5 coun, price $500)</button> */}
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
