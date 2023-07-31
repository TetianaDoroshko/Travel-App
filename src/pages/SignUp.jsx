import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../Components/PageTitle/PageTitle';
import { SignUpInForm, LinkAfterForm } from '../Components/SignUpInForm/SignUpInForm';
import styles from './pages.module.css';
import { signUpThunk } from '../redux/actions/auth/signUp';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { RoutingPath } from '../variables/routingPath';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(store => store.auth);

    useEffect(() => {
        if (isLoggedIn) navigate(`${RoutingPath.HOME}`);
    }, [isLoggedIn, navigate]);

    const signUpNewUser = newUser => {
        console.log(newUser);
        dispatch(signUpThunk(newUser));
    };
    return (
        <main className={styles.signUpInpage}>
            <PageTitle hidden={true}>Travel App</PageTitle>
            <SignUpInForm title="Sign Up" onSubmit={signUpNewUser} />
            <span>
                Already have an account?
                <LinkAfterForm title="Sign In" dataId="auth-sign-in-link" path={RoutingPath.SIGN_IN} />
            </span>
        </main>
    );
};
export default SignUp;
