import PropTypes from 'prop-types';
import style from './tripPrice.module.css';

const TripPrice = ({ trip }) => {
    return (
        <div>
            <span>Price</span>
            <strong data-test-id="trip-card-price-value" className={style.tripPrice__value}>
                {trip.price} $
            </strong>
        </div>
    );
};

TripPrice.propTypes = {
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

export default TripPrice;
