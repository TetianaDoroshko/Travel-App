import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import style from './Filter.module.css';
import FilterInput from './FilterInput';
import FilterInputSelect from './FilterInputSelect';
import { useEffect, useState } from 'react';
import { durationOpts, levelOpts } from '../../variables/filterOptions';

const Filter = ({ change }) => {
    const [filter, setFilter] = useState({ search: '', duration: '', level: '' });

    const changeFilter = (filterName, value) => {
        setFilter(prevFilter => ({ ...prevFilter, [filterName]: value }));
    };
    useEffect(() => {
        change(filter);
    }, [change, filter]);

    return (
        <section className={style.tripsFilter}>
            <PageTitle hidden={true} subTitle={true}>
                Trips filter
            </PageTitle>
            <form className={style.tripsFilter__form} autoComplete="off">
                <FilterInput
                    name="search"
                    type="search"
                    dataId="filter-search"
                    title="Search by name"
                    placeholder="search by title"
                    value={filter.search}
                    onChange={changeFilter}
                />
                <FilterInputSelect
                    title="Search by duration"
                    dataId="filter-duration"
                    name="duration"
                    options={durationOpts}
                    value={filter.duration}
                    onChange={changeFilter}
                />

                <FilterInputSelect
                    title="Search by level"
                    dataId="filter-level"
                    name="level"
                    options={levelOpts}
                    value={filter.level}
                    onChange={changeFilter}
                />
            </form>
        </section>
    );
};

Filter.propTypes = {
    change: PropTypes.func.isRequired
};

export default Filter;
