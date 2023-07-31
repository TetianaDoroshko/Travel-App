import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => (
    <NavLink to={'/'} className={styles.header__logo} data-test-id="header-logo">
        Travel App
    </NavLink>
);
export default Logo;
