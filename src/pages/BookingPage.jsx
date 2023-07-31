import PageTitle from '../Components/PageTitle/PageTitle';
import style from './pages.module.css';
import BookingsList from '../Components/Bookings/BookingsList';
import BookingCard from '../Components/Bookings/BookingCard';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsThunk } from '../redux/actions/bookings/getBookings';
import { removeBookingThunk } from '../redux/actions/bookings/removeBooking';

const BookingPage = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector(store => store.bookings);
    useEffect(() => {
        dispatch(getBookingsThunk());
    }, [dispatch]);

    const sortedBookings = useMemo(() => [...bookings].sort((a, b) => new Date(a.date) - new Date(b.date)), [bookings]);

    const removeBooking = bookingId => {
        dispatch(removeBookingThunk(bookingId));
    };
    return (
        <main className={style.bookingsPage}>
            <PageTitle hidden={true}>Travel App</PageTitle>
            {bookings.length > 0 ? (
                <BookingsList>
                    {sortedBookings.map(booking => (
                        <BookingCard key={booking.id} booking={booking} remove={removeBooking} />
                    ))}
                </BookingsList>
            ) : (
                <p>No bookings yet</p>
            )}
        </main>
    );
};

export default BookingPage;
