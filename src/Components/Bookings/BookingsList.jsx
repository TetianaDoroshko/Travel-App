import PropTypes from 'prop-types';
import style from './bookings.module.css';

const BookingsList = ({ children }) => {
    return <ul className={style.bookings__list}>{children}</ul>;
};

BookingsList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default BookingsList;
