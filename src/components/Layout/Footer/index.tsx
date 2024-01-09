import Typography from '@mui/material/Typography';
import style from './style.module.scss';
const Footer = () => {
    return <div className={style.footer}>
        <div className={style.navigation}>
            <p>Navigation:</p>

            <Typography component="a" href={'/'} textAlign="center">
                Home
            </Typography>
            <Typography component="a" href={'/privacy'} textAlign="center">
                Privacy policy
            </Typography>
            <Typography component="a" href={'/faq'} textAlign="center">
                F.A.Q.
            </Typography>

        </div>
        <p>© Exmobit 2023 All rights reserved.</p>
    </div>
}

export default Footer