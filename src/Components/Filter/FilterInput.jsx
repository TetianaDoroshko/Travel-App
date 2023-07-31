import PropTypes from 'prop-types';
import style from './Filter.module.css';
import inputStyle from '../Input/Input.module.css';
import HiddenLabel from '../HiddenLabel/HiddenLabel';

const FilterInput = ({ name, dataId, type = 'text', title, placeholder, autocomplete, value, onChange }) => {
    const classNames = `${style.tripsFilter__search} ${inputStyle.input}`;

    const onInputChange = event => {
        onChange(event.target.name, event.target.value);
    };
    return (
        <label className={classNames}>
            <HiddenLabel>{title}</HiddenLabel>
            <input
                data-test-id={dataId}
                name={name}
                type={type}
                placeholder={placeholder}
                autoComplete={autocomplete}
                value={value}
                onInput={onInputChange}
            />
        </label>
    );
};

FilterInput.propTypes = {
    name: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    autocomplete: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FilterInput;
