import PropTypes from 'prop-types';
import styles from './signUpInForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const SignUpInForm = ({ title, onSubmit }) => {
    const isShown = title === 'Sign Up';

    const onFormSubmit = e => {
        e.preventDefault();
        const newUser = {
            fullName: e.currentTarget.elements['full-name']?.value,
            email: e.currentTarget.elements.email.value,
            password: e.currentTarget.elements.password.value
        };
        onSubmit(newUser);
        e.currentTarget.reset();
    };

    return (
        <form className={styles.signUpInform} autoComplete="off" onSubmit={onFormSubmit}>
            <h2 className={styles.signUpInform__title}>{title}</h2>

            {isShown && <Input dataId="auth-full-name" name="full-name" title="Full name" />}
            <Input dataId="auth-email" name="email" type="email" title="Email" />
            <Input
                dataId="auth-password"
                name="password"
                type="password"
                title="Password"
                autocomplete="new-password"
                min={3}
                max={20}
            />
            <Button dataId="auth-submit" title={title} />
        </form>
    );
};

SignUpInForm.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const LinkAfterForm = ({ path, dataId, title }) => {
    return (
        <NavLink to={path} data-test-id={dataId} className={styles.signUpInform__link}>
            {title}
        </NavLink>
    );
};

LinkAfterForm.propTypes = {
    path: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    title: PropTypes.string.isRequired
};

export { SignUpInForm, LinkAfterForm };

export default SignUpInForm;
