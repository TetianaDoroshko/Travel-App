import PropTypes from 'prop-types';
import style from './bookings.module.css';
import HiddenLabel from '../HiddenLabel/HiddenLabel';
import { formatDate } from '../../helpers/setDate';
import { BookingType } from '../../variables/propTypes';

const BookingCard = ({ booking, remove }) => {
    const formattedDate = formatDate(booking.date);
    return (
        <li data-test-id="booking" className={style.booking}>
            <h3 data-test-id="booking-title" className={style.booking__title}>
                {booking.trip.title}
            </h3>
            <span data-test-id="booking-guests" className={style.booking__guests}>
                {booking.guests} guests
            </span>
            <span data-test-id="booking-date" className={style.booking__date}>
                {formattedDate}
            </span>
            <span data-test-id="booking-total" className={style.booking__total}>
                {booking.totalPrice} $
            </span>
            <button
                data-test-id="booking-cancel"
                className={style.booking__cancel}
                title="Cancel booking"
                onClick={() => remove(booking.id)}
            >
                <HiddenLabel>Cancel booking</HiddenLabel>×
            </button>
        </li>
    );
};

BookingCard.propTypes = {
    booking: BookingType.isRequired,
    remove: PropTypes.func.isRequired
};

export default BookingCard;
