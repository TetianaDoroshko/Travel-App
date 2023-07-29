import PropTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ children }) => {
    return (
        <div>
            <div className={styles.modal}>{children}</div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node
};

export default Modal;
