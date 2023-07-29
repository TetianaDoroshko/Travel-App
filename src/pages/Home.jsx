import PropTypes from 'prop-types';
import PageTitle from '../Components/PageTitle/PageTitle';
import Filter from '../Components/Filter/Filter';
import TripsContainer from '../Components/TripsContainer/TripsContainer';

import { useMemo, useState } from 'react';
import { check, checkDuration } from '../helpers/checkFilter';
import { TripType } from '../variables/propTypes';

const Home = ({ trips }) => {
    const [filter, setFilter] = useState({ search: '', duration: '', level: '' });

    const filteredTrips = useMemo(
        () =>
            trips
                .filter(trip => check(filter.level, trip.level))
                .filter(trip => checkDuration(filter.duration, trip.duration))
                .filter(trip => check(filter.search, trip.title)),
        [trips, filter]
    );

    return (
        <main>
            <PageTitle hidden={true}>Travel App</PageTitle>
            <Filter change={setFilter} />
            <TripsContainer trips={filteredTrips} />
        </main>
    );
};

Home.propTypes = {
    trips: PropTypes.arrayOf(TripType)
};

export default Home;
