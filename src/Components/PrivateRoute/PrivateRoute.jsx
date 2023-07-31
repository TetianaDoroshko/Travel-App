import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RoutingPath } from '../../variables/routingPath.js';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(store => store.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to={RoutingPath.HOME} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.element
};

export default PrivateRoute;
