import PropTypes from 'prop-types';
import styles from './input.module.css';
import { setDateTomorrow } from '../../helpers/setDate';

const InputControlled = ({ name, dataId, type = 'text', title, min, max, value, onChange }) => {
    if (name === 'date') {
        min = setDateTomorrow();
    }

    const onInputChange = event => onChange(event.currentTarget.value);

    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{title}</span>
            <input
                data-test-id={dataId}
                name={name}
                type={type}
                min={min}
                max={max}
                value={value}
                onChange={onInputChange}
                required
            />
        </label>
    );
};

InputControlled.propTypes = {
    name: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
};

export default InputControlled;
