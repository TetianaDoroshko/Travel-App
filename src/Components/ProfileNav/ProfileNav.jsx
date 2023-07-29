import navStyle from '../Navigation/navigation.module.css';
import style from './profileNav.module.css';
import NavItemLink from '../Navigation/NavItemLink';
import iconUser from '../../assets/images/user.svg';
import ProfileNavItem from './ProfileNavItem';
import ProfileNavLink from './ProfileNavLink';

const ProfileNav = () => {
    return (
        <div
            data-test-id="header-profile-nav"
            className={`${navStyle.navHeader__inner} ${style.profileNav}`}
            tabIndex={0}
        >
            <NavItemLink path="#" title="Profile" icon={iconUser} hidden={true} />
            <ul data-test-id="header-profile-nav-list" className={style.profileNav__list}>
                <ProfileNavItem dataId="header-profile-nav-username">John Doe</ProfileNavItem>
                <ProfileNavItem>
                    <ProfileNavLink path="/sign-in" dataId="header-profile-nav-sign-out">
                        Sign Out
                    </ProfileNavLink>
                </ProfileNavItem>
            </ul>
        </div>
    );
};

ProfileNav.propTypes = {};

export default ProfileNav;
