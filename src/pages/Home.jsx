import PageTitle from '../Components/PageTitle/PageTitle';
import Filter from '../Components/Filter/Filter';
import TripsContainer from '../Components/TripsContainer/TripsContainer';
import { useEffect, useMemo, useState } from 'react';
import { check, checkDuration } from '../helpers/checkFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllThunk } from '../redux/actions/trips/getAll';

const Home = () => {
    const [filter, setFilter] = useState({ search: '', duration: '', level: '' });

    const dispatch = useDispatch();
    const { trips } = useSelector(store => store.trips);

    useEffect(() => {
        dispatch(getAllThunk());
    }, [dispatch]);

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

export default Home;
