import PropTypes from 'prop-types';
import TripInfo from '../TripInfo/TripInfo';
import TripPrice from '../TripPrice/TripPrice';
import { NavLink } from 'react-router-dom';
import style from './TripsContainer.module.css';
import btnStyle from '../Button/Button.module.css';

const TripCard = ({ trip }) => {
    return (
        <li data-test-id="trip-card" className={style.tripCard}>
            <img
                className={style.tripCard__image}
                data-test-id="trip-card-image"
                src={trip.image}
                alt={`${trip.title}`}
            />
            <div className={style.tripCard__content}>
                <TripInfo trip={trip} dataId="trip-card" />
                <TripPrice trip={trip} />
            </div>
            <NavLink data-test-id="trip-card-link" to={`/trip/${trip.id}`} className={btnStyle.button}>
                Discover a trip
            </NavLink>
        </li>
    );
};

TripCard.propTypes = {
    trip: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        level: PropTypes.string,
        duration: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        createdAt: PropTypes.string
    })
};

export default TripCard;
