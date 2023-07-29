import PropTypes from 'prop-types';
import PageTitle from '../Components/PageTitle/PageTitle';
import style from './pages.module.css';
import BookingsList from '../Components/Bookings/BookingsList';
import BookingCard from '../Components/Bookings/BookingCard';
import { useMemo } from 'react';

const BookingPage = ({ bookings, remove }) => {
    const sortedBookings = useMemo(() => [...bookings].sort((a, b) => new Date(a.date) - new Date(b.date)), [bookings]);

    return (
        <main className={style.bookingsPage}>
            <PageTitle hidden={true}>Travel App</PageTitle>
            <BookingsList>
                {sortedBookings.map(booking => (
                    <BookingCard key={booking.id} booking={booking} remove={remove} />
                ))}
            </BookingsList>
        </main>
    );
};

BookingPage.propTypes = {
    bookings: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ),
    remove: PropTypes.func.isRequired
};

export default BookingPage;
