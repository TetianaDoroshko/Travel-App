import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, type = 'submit', dataId, addClass, onClick }) => {
    const classes = addClass ? `${styles.button} ${styles[addClass]}` : styles.button;
    return (
        <button data-test-id={dataId} className={classes} type={type} onClick={onClick} title={title}>
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    dataId: PropTypes.string,
    addClass: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
