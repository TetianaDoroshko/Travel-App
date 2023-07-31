import { useEffect, useState } from 'react';
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Loader from './Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from './helpers/localStorage';
import { checkCurrentThunk } from './redux/actions/auth/checkCurrent';
import { RoutingPath } from './variables/routingPath';

function App() {
    const [showNav, setShowNav] = useState(false);

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector(store => store.auth);

    useEffect(() => {
        const token = getLocalStorage();
        token ? dispatch(checkCurrentThunk(token)) : navigate(RoutingPath.SIGN_IN);
    }, [dispatch, navigate]);

    useEffect(() => {
        if (location.pathname !== RoutingPath.SIGN_UP && location.pathname !== RoutingPath.SIGN_IN) {
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
                        path={RoutingPath.HOME}
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path={RoutingPath.SIGN_UP} element={<SignUp />} />
                    <Route path={RoutingPath.SIGN_IN} element={<SignIn />} />
                    <Route
                        path={RoutingPath.TRIP_PAGE}
                        element={
                            <PrivateRoute>
                                <TripPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={RoutingPath.BOOKING}
                        element={
                            <PrivateRoute>
                                <BookingPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to={RoutingPath.HOME} />} />
                </Routes>
            )}

            <Footer />
        </>
    );
}

export default App;
