import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './profileNav.module.css';
import btnStyle from '../Button/button.module.css';

const ProfileNavLink = ({ path, dataId = null, children }) => {
    return (
        <NavLink to={path} data-test-id={dataId} className={`${style.profileNav__signOut} ${btnStyle.button}`}>
            {children}
        </NavLink>
    );
};

ProfileNavLink.propTypes = {
    path: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    children: PropTypes.string.isRequired
};

export default ProfileNavLink;
