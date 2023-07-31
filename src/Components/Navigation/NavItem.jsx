import PropTypes from 'prop-types';
import style from './Navigation.module.css';

const NavItem = ({ title, children }) => (
    <li title={title} className={style.navHeader__item}>
        {children}
    </li>
);

NavItem.propTypes = { children: PropTypes.node, title: PropTypes.string };

export default NavItem;
