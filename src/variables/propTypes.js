import PropTypes from 'prop-types';

export const TripType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
});

export const BookingType = PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    tripId: PropTypes.string,
    guests: PropTypes.number,
    date: PropTypes.string,
    trip: PropTypes.shape({
        title: PropTypes.string,
        duration: PropTypes.number,
        price: PropTypes.number
    }),
    totalPrice: PropTypes.number,
    createdAt: PropTypes.string
});
