import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../Components/PageTitle/PageTitle';
import Loader from '../Components/Loader/Loader';
import { SignUpInForm, LinkAfterForm } from '../Components/SignUpInForm/SignUpInForm';
import styles from './pages.module.css';
import { signupThunk } from '../redux/actions/auth/sugnUp';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(store => store.auth);

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn, navigate]);

    const signUpNewUser = newUser => {
        console.log(newUser);
        dispatch(signupThunk(newUser));
    };
    return (
        <main className={styles.signUpInpage}>
            <PageTitle hidden={true}>Travel App</PageTitle>
            <SignUpInForm title="Sign Up" onSubmit={signUpNewUser} />
            <span>
                Already have an account?
                <LinkAfterForm title="Sign In" dataId="auth-sign-in-link" path="/sign-in" />
            </span>
        </main>
    );
};
export default SignUp;
