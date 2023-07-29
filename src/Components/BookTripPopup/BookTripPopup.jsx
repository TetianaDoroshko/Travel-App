import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import style from './bookTripPopup.module.css';
import TripInfo from '../TripInfo/TripInfo';
import Button from '../Button/Button';
import InputControlled from '../Input/InputControlled';
import { TripType } from '../../variables/propTypes';
import { useState } from 'react';
import { formatDate, setDateTomorrow } from '../../helpers/setDate';

const BookTripPopup = ({ trip, onClose, add }) => {
    const [date, setDate] = useState(setDateTomorrow());
    const [guests, setGuests] = useState(1);

    let totalValue = trip.price * guests;

    const onFormSubmit = event => {
        event.preventDefault();
        const newBooking = {
            id: uuid(),
            userId: uuid(),
            tripId: trip.id,
            guests: +guests,
            date: formatDate(date),
            trip: {
                title: trip.title,
                duration: trip.duration,
                price: trip.price
            },
            totalPrice: totalValue,
            createdAt: formatDate(Date.now())
        };
        add(newBooking);
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
    onClose: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
};

export default BookTripPopup;
