import PropTypes from 'prop-types';
import style from './profileNav.module.css';

const ProfileNavItem = ({ dataId = null, children }) => {
    return (
        <li className={style.profileNav__item} data-test-id={dataId}>
            {children}
        </li>
    );
};

ProfileNavItem.propTypes = {
    children: PropTypes.node,
    dataId: PropTypes.string
};

export default ProfileNavItem;
