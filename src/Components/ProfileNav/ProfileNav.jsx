import navStyle from '../Navigation/navigation.module.css';
import style from './profileNav.module.css';
import NavItemLink from '../Navigation/NavItemLink';
import iconUser from '../../assets/images/user.svg';
import ProfileNavItem from './ProfileNavItem';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signOutThunk } from '../../redux/actions/auth/signOut';

const ProfileNav = () => {
    const dispatch = useDispatch();
    const { fullName } = useSelector(store => store.auth.user);

    const signOut = () => {
        dispatch(signOutThunk());
    };

    return (
        <div
            data-test-id="header-profile-nav"
            className={`${navStyle.navHeader__inner} ${style.profileNav}`}
            tabIndex={0}
        >
            <NavItemLink path="#" title="Profile" icon={iconUser} hidden={true} />
            <ul data-test-id="header-profile-nav-list" className={style.profileNav__list}>
                <ProfileNavItem dataId="header-profile-nav-username">{fullName}</ProfileNavItem>
                <ProfileNavItem>
                    <Button
                        title="Sign Out"
                        dataId="header-profile-nav-sign-out"
                        type="button"
                        addClass="signOut__button"
                        onClick={signOut}
                    />
                </ProfileNavItem>
            </ul>
        </div>
    );
};

ProfileNav.propTypes = {};

export default ProfileNav;
