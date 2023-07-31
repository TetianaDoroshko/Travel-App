import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import heartIcon from '../../assets/images/heart.svg';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <span className={style.footer__text}>
                from
                <Link className={style.footer__link} to="https://binary-studio.com">
                    binary studio
                </Link>
                with
                <img className={style.footer__icon} src={heartIcon} alt="heart" />
            </span>
        </footer>
    );
};
export default Footer;
