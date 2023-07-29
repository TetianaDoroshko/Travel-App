import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import TripPage from './pages/TripPage';
import BookingPage from './pages/BookingPage';
import tripsList from './assets/trips.json';
import bookingList from './assets/booked-trips.json';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Loader from './Components/Loader/Loader';
import { useSelector } from 'react-redux';

function App() {
    const [showNav, setShowNav] = useState(false);
    const [trips] = useState(tripsList);
    const [boogings, setBookings] = useState(bookingList);

    const location = useLocation();

    const { loading } = useSelector(store => store.auth);

    useEffect(() => {
        if (location.pathname !== '/sign-up' && location.pathname !== '/sign-in') {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }, [location]);

    const addBooking = useCallback(newBooking => setBookings([...boogings, newBooking]), [boogings]);

    const removeBooking = useCallback(id => setBookings(boogings.filter(booking => booking.id !== id)), [boogings]);

    console.log(process.env.REACT_APP_BASE_URL);

    return (
        <>
            {loading && <Loader />}
            <Header>
                <Logo />
                {showNav && <Navigation />}
            </Header>

            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home trips={trips} />
                        </PrivateRoute>
                    }
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route
                    path="/trip/:id"
                    element={
                        <PrivateRoute>
                            <TripPage trips={trips} add={addBooking} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/booking"
                    element={
                        <PrivateRoute>
                            <BookingPage bookings={boogings} remove={removeBooking} />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
