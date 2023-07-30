import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
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
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from './helpers/localStorage';
import { checkCurrentThunk } from './redux/actions/auth/checkCurrent';

function App() {
    const [showNav, setShowNav] = useState(false);
    const [trips] = useState(tripsList);
    const [boogings, setBookings] = useState(bookingList);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading } = useSelector(store => store.auth);

    useEffect(() => {
        const token = getLocalStorage();
        token ? dispatch(checkCurrentThunk(token)) : navigate('/sign-in');
    }, [dispatch, navigate]);

    useEffect(() => {
        if (location.pathname !== '/sign-up' && location.pathname !== '/sign-in') {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }, [location]);

    const addBooking = useCallback(newBooking => setBookings([...boogings, newBooking]), [boogings]);

    const removeBooking = useCallback(id => setBookings(boogings.filter(booking => booking.id !== id)), [boogings]);

    return (
        <>
            <Header>
                <Logo />
                {showNav && <Navigation />}
            </Header>
            {loading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route
                        path="/trip/:id"
                        element={
                            <PrivateRoute>
                                <TripPage />
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
            )}

            <Footer />
        </>
    );
}

export default App;
