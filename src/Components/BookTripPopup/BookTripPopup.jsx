import PropTypes from 'prop-types';
import style from './bookTripPopup.module.css';
import TripInfo from '../TripInfo/TripInfo';
import Button from '../Button/Button';
import InputControlled from '../Input/InputControlled';
import { TripType } from '../../variables/propTypes';
import { useState } from 'react';
import { formatDate, setDateTomorrow } from '../../helpers/setDate';
import { useDispatch, useSelector } from 'react-redux';
import { addBookingThunk } from '../../redux/actions/bookings/addBooking';

const BookTripPopup = ({ trip, onClose }) => {
    const [date, setDate] = useState(setDateTomorrow());
    const [guests, setGuests] = useState(1);
    const userId = useSelector(store => store.auth.user.id);
    const dispatch = useDispatch();

    let totalValue = trip.price * guests;

    const onFormSubmit = event => {
        event.preventDefault();
        const newBooking = {
            tripId: trip.id,
            userId: userId,
            guests: +guests,
            date: formatDate(date)
        };
        dispatch(addBookingThunk(newBooking));
        event.currentTarget.reset();
        onClose();
    };

    return (
        <div data-test-id="book-trip-popup" className={style.bookTripPopup}>
            <button data-test-id="book-trip-popup-close" className={style.bookTripPopup__close} onClick={onClose}>
                ×
            </button>
            <form className={style.bookTripPopup__form} autoComplete="off" onSubmit={onFormSubmit}>
                <TripInfo trip={trip} dataId="book-trip-popup" />
                <InputControlled
                    title="Date"
                    dataId="book-trip-popup-date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={setDate}
                />
                <InputControlled
                    title="Number of guests"
                    dataId="book-trip-popup-guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={10}
                    value={guests}
                    onChange={setGuests}
                />
                <span className={style.bookTripPopup__total}>
                    Total:
                    <output data-test-id="book-trip-popup-total-value" className={style.bookTripPopup__totalValue}>
                        {totalValue}$
                    </output>
                </span>
                <Button title="Book a trip" dataId="book-trip-popup-submit"></Button>
            </form>
        </div>
    );
};

BookTripPopup.propTypes = {
    trip: TripType.isRequired,
    onClose: PropTypes.func.isRequired
};

export default BookTripPopup;
