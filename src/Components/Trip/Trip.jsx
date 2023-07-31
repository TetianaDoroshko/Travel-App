import PropTypes from 'prop-types';
import style from './Trip.module.css';
import TripInfo from '../TripInfo/TripInfo';
import TripPrice from '../TripPrice/TripPrice';
import Button from '../Button/Button';
import { TripType } from '../../variables/propTypes';

const Trip = ({ trip, showModal }) => {
    return (
        <div className={style.trip}>
            <img data-test-id="trip-details-image" src={trip.image} className={style.trip__img} alt={`${trip.title}`} />
            <div className={style.trip__content}>
                <TripInfo trip={trip} dataId="details" />
                <div data-test-id="trip-details-description" className={style.trip__description}>
                    {trip.description}
                </div>
                <TripPrice trip={trip} dataId="trip-details" />
                <Button
                    title="Book a trip"
                    dataId="trip-details-button"
                    onClick={showModal}
                    addClass="trip__button"
                    type="button"
                />
            </div>
        </div>
    );
};

Trip.propTypes = {
    trip: TripType.isRequired,
    showModal: PropTypes.func
};

export default Trip;
