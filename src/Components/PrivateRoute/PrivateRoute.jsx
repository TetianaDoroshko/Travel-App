import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = true;
    return isLoggedIn ? children : <Navigate to="/sign-in" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.element
};

export default PrivateRoute;
