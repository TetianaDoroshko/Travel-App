import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ name, dataId, type = 'text', title, min, max, autocomplete }) => {
    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{title}</span>
            <input
                data-test-id={dataId}
                name={name}
                type={type}
                autoComplete={autocomplete}
                minLength={min}
                maxLength={max}
                required
            />
        </label>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    autocomplete: PropTypes.string
};

export default Input;
