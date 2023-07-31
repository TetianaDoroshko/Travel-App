import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import commonStyle from '../../styles/App.module.css';

const NavItemLink = ({ path, dataId = null, title, icon, hidden }) => {
    const classNames = hidden ? commonStyle.visuallyHidden : null;
    return (
        <NavLink to={path} data-test-id={dataId} className={style.navHeader__inner}>
            <span className={classNames}>{title}</span>
            {icon && <img src={icon} alt={title} />}
        </NavLink>
    );
};

NavItemLink.propTypes = {
    path: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    hidden: PropTypes.bool
};

export default NavItemLink;
