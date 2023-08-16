import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

interface Props {}
const Main = (props: Props) => {
    return (
        <Container sx={{ padding: '60px 0' }}>
            <Home />
        </Container>
    )
}
export default Main
