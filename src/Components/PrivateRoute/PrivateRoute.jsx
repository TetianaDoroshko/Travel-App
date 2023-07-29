import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(store => store.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/sign-in" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.element
};

export default PrivateRoute;
