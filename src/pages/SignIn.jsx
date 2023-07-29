import PageTitle from '../Components/PageTitle/PageTitle';
import { SignUpInForm, LinkAfterForm } from '../Components/SignUpInForm/SignUpInForm';
import styles from './pages.module.css';

const SignIn = () => {
    return (
        <main className={styles.signUpInpage}>
            <PageTitle hidden={true}>Travel App</PageTitle>
            <SignUpInForm title="Sign In" />
            <span>
                Already have an account?
                <LinkAfterForm title="Sign Up" dataId="auth-sign-in-link" path="/sign-up" />
            </span>
        </main>
    );
};
export default SignIn;
