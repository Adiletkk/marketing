import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
	const [modalNode, setModalNode] = useState(null);

	useEffect(() => {
		if (isOpen && !modalNode) {
			const node = document.createElement('div');
			setModalNode(node);
		
		}
		return () => {
			modalNode && modalNode.remove();
			setModalNode(null);
		};
	}, [isOpen, modalNode]);

	useEffect(() => {
		if (modalNode) {
			modalNode && document.body.appendChild(modalNode);
		}
	}, [modalNode]);

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		if (modalNode && isOpen) {
			window.addEventListener('keydown', handleEscape);
		}

		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, modalNode, onClose]);

	const handleOverlayClick = (event) => {
		if (modalNode && event.target === modalNode) {
			onClose();
		}
	};

	return modalNode
		? ReactDOM.createPortal(
			<div className="modal-overlay" onClick={handleOverlayClick}>
				<div className="modal-content">{children}</div>
			</div>,
			modalNode
		)
		: null;
};

export default Modal;