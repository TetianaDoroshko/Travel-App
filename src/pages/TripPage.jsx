import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import PageTitle from '../Components/PageTitle/PageTitle';
import Trip from '../Components/Trip/Trip';
import style from '../pages/pages.module.css';
import { useState } from 'react';
import Modal from '../Components/Modal/Modal';
import BookTripPopup from '../Components/BookTripPopup/BookTripPopup';
import { TripType } from '../variables/propTypes';

const TripPage = ({ trips, add }) => {
    const { id } = useParams();
    const [isShownModal, setIsShownModal] = useState(false);

    const showModal = () => {
        setIsShownModal(true);
    };

    const closeModal = () => {
        setIsShownModal(false);
    };

    const trip = trips.find(trip => trip.id === id);

    return (
        <>
            <main className={style.tripPage}>
                <PageTitle hidden={true}>Travel App</PageTitle>
                <Trip trip={trip} showModal={showModal} />
            </main>
            {isShownModal && (
                <Modal>
                    <BookTripPopup trip={trip} onClose={closeModal} add={add} />
                </Modal>
            )}
        </>
    );
};

TripPage.propTypes = {
    trips: PropTypes.arrayOf(TripType),
    add: PropTypes.func.isRequired
};

export default TripPage;
