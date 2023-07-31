import PropTypes from 'prop-types';
import style from './TripsContainer.module.css';
import PageTitle from '../PageTitle/PageTitle';
import TripCard from './TripCard';
import { TripType } from '../../variables/propTypes';

const TripsContainer = ({ trips }) => {
    return (
        <section className={style.trips}>
            <PageTitle hidden={true} subTitle={true}>
                Trips List
            </PageTitle>
            <ul className={style.tripList}>
                {trips.map(trip => (
                    <TripCard key={trip.id} trip={trip} />
                ))}
            </ul>
        </section>
    );
};

TripsContainer.propTypes = {
    trips: PropTypes.arrayOf(TripType)
};

export default TripsContainer;
