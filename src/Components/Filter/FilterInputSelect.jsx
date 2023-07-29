import PropTypes from 'prop-types';
import HiddenLabel from '../HiddenLabel/HiddenLabel';
import style from './filter.module.css';

const FilterInputSelect = ({ title = '', name, dataId, options, value, onChange }) => {
    const onInputChange = event => {
        onChange(event.target.name, event.target.value);
    };
    return (
        <label className={style.select}>
            <HiddenLabel>{title}</HiddenLabel>
            <select data-test-id={dataId} name={name} value={value} onChange={onInputChange}>
                <option value="">{name}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.descr}
                    </option>
                ))}
            </select>
        </label>
    );
};

FilterInputSelect.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            dascr: PropTypes.string
        })
    ),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FilterInputSelect;
