// import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import PageTitle from '../Components/PageTitle/PageTitle';
import Trip from '../Components/Trip/Trip';
import style from '../pages/pages.module.css';
import { useEffect, useState } from 'react';
import Modal from '../Components/Modal/Modal';
import BookTripPopup from '../Components/BookTripPopup/BookTripPopup';
import { useDispatch, useSelector } from 'react-redux';
import { getTripThunk } from '../redux/actions/trips/getTripById';
// import { TripType } from '../variables/propTypes';

const TripPage = () => {
    const { id } = useParams();
    const [isShownModal, setIsShownModal] = useState(false);
    const dispatch = useDispatch();
    const { trip } = useSelector(store => store.trips);

    useEffect(() => {
        dispatch(getTripThunk(id));
    }, [dispatch, id]);

    const showModal = () => {
        setIsShownModal(true);
    };

    const closeModal = () => {
        setIsShownModal(false);
    };

    return (
        <>
            <main className={style.tripPage}>
                <PageTitle hidden={true}>Travel App</PageTitle>
                <Trip trip={trip} showModal={showModal} />
            </main>
            {isShownModal && (
                <Modal>
                    <BookTripPopup trip={trip} onClose={closeModal} />
                </Modal>
            )}
        </>
    );
};

TripPage.propTypes = {
    // trips: PropTypes.arrayOf(TripType),
    // add: PropTypes.func.isRequired
};

export default TripPage;
