import PropTypes from 'prop-types';
import style from './TripInfo.module.css';

const TripInfo = ({ trip, dataId }) => {
    return (
        <div className={style.tripInfo}>
            <h3 data-test-id={`${dataId}-title`} className={style.tripInfo__title}>
                {trip.title}
            </h3>
            <div className={style.tripInfo__content}>
                <span data-test-id={`${dataId}-duration`} className={style.tripInfo__duration}>
                    <strong>{trip.duration}</strong> days
                </span>
                <span data-test-id={`${dataId}-level`} className={style.tripInfo__level}>
                    {trip.level}
                </span>
            </div>
        </div>
    );
};

TripInfo.propTypes = {
    trip: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        level: PropTypes.string,
        duration: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        createdAt: PropTypes.string
    }),
    dataId: PropTypes.string
};

export default TripInfo;
