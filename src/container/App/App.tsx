import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'

interface Props {}
const App = (props: Props) => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default App
