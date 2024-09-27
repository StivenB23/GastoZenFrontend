import { useState } from 'react';
import './Modal.css';

const Modal = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='modal__window' style={isOpen ? { display: "flex" } : { display: "none" }}>
			{children}
			<div className="">
				<button type='button' onClick={handleClose}>Entendido</button>
			</div>
		</div>
	);
};

Modal.propTypes = {};

export default Modal;