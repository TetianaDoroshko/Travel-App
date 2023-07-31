import { useEffect, useState } from 'react';
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Loader from './Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from './helpers/localStorage';
import { checkCurrentThunk } from './redux/actions/auth/checkCurrent';

function App() {
    const [showNav, setShowNav] = useState(false);

    const location = useLocation();
    const dispatch = useDispatch();

    const { loading } = useSelector(store => store.auth);

    useEffect(() => {
        const token = getLocalStorage();
        token ? dispatch(checkCurrentThunk(token)) : <Navigate to="/sign-in" />;
    }, [dispatch]);

    useEffect(() => {
        if (location.pathname !== '/sign-up' && location.pathname !== '/sign-in') {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }, [location]);

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
                                <BookingPage />
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
