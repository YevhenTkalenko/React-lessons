import logo from 'assets/logo.svg'
import Typography from '@mui/material/Typography'

interface Props {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Fake logo" />
        </Typography>
    )
}

export default Logo
