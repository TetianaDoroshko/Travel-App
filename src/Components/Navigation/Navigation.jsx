// import PropTypes from 'prop-types';
import NavItem from './NavItem';
import NavItemLink from './NavItemLink';
import iconBookings from '../../assets/images/briefcase.svg';
import style from './Navigation.module.css';
import ProfileNav from '../ProfileNav/ProfileNav';

const Navigation = () => {
    return (
        <nav data-test-id="header-nav" className={style.header__nav}>
            <ul className={style.navHeader__list}>
                <NavItem title="Bookings">
                    <NavItemLink
                        path="/booking"
                        icon={iconBookings}
                        dataId="header-bookings-link"
                        hidden={true}
                        title="Bookings"
                    />
                </NavItem>
                <NavItem title="Profile">
                    <ProfileNav />
                </NavItem>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {};

export default Navigation;
