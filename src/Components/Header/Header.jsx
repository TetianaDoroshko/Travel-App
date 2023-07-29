import PropTypes from 'prop-types';
import styles from './header.module.css';

const Header = ({ children }) => (
    <header className={styles.header}>
        <div className={styles.header__inner}>{children}</div>
    </header>
);
Header.propTypes = {
    children: PropTypes.node
};

export default Header;
