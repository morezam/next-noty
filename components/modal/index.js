import ReactModal from 'react-modal';
import styles from './modal.module.css';
ReactModal.setAppElement('#__next');

const Modal = ({ children, isOpen, onRequestClose }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={styles.modal}
			overlayClassName={styles.overlay}>
			{children}
		</ReactModal>
	);
};

export default Modal;
