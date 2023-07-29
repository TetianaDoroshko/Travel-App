import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../Components/PageTitle/PageTitle';
import { SignUpInForm, LinkAfterForm } from '../Components/SignUpInForm/SignUpInForm';
import styles from './pages.module.css';
import { signInThunk } from '../redux/actions/auth/signIn';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(store => store.auth);

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn, navigate]);

    const signInUser = ({ fullName, email, password }) => {
        console.log({ fullName, email, password });
        dispatch(signInThunk({ email, password }));
    };

    return (
        <main className={styles.signUpInpage}>
            <PageTitle hidden={true}>Travel App</PageTitle>
            <SignUpInForm title="Sign In" onSubmit={signInUser} />
            <span>
                Already have an account?
                <LinkAfterForm title="Sign Up" dataId="auth-sign-in-link" path="/sign-up" />
            </span>
        </main>
    );
};
export default SignIn;
