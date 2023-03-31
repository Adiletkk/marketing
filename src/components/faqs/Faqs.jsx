import styles from './Faqs.module.css';
//import Faqss from '../images/faqs_img.png';
//import '../../App.css'
////import { FaqsQuestions } from '../../Contstants/FaqsQuestions'
////import FaqsCard from '../faqsCard/FaqsCard';


//const Faqs = () => {

	
//	return (
//		<div className={styles.main}>
//			<section className={styles.list}>
//				<span>FAQS</span>
//				<h1>Frequently Asked Questions </h1>
//				{/*{FaqsQuestions.map((item) =>
//					<div key={item.id}>
//						<div>{item.title} <button onClick={() => setModal(!modal)}>
							
//							{!modal ? (
//							<span>+</span>
//							) : (
//								<span>-</span>
//							)}
//							</button> 
//						</div>
//						{
//							modal && (
//								<div>{item.text}</div>
//								)
//						}
//						<div className={`modal modal-${modal}`}>{item.text}</div>
//					</div>
//				)}*/}
//				{/*<FaqsCard title={FaqsQuestions.title} text={FaqsQuestions.text}/>*/}

//			</section>
//			<section>
//				<img src={Faqss} alt="" />
//			</section>
//		</div>
//	)
//}


import React, { useState, useRef, useEffect } from 'react';

function Faqs({ defaultOption }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultOption || '');
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			setIsOpen(!isOpen);
		} else if (event.key === 'Escape') {
			setIsOpen(false);
		} else if (event.key === 'ArrowUp' && isOpen) {
			event.preventDefault();
			const options = dropdownRef.current.querySelectorAll(`${styles.dropdown_item}`);
			const index = Array.from(options).findIndex((option) => option === document.activeElement);
			const nextIndex = index === 0 ? options.length - 1 : index - 1;
			options[nextIndex].focus();
		} else if (event.key === 'ArrowDown' && isOpen) {
			event.preventDefault();
			const options = dropdownRef.current.querySelectorAll(`${styles.dropdown_item}`);
			const index = Array.from(options).findIndex((option) => option === document.activeElement);
			const nextIndex = index === options.length - 1 ? 0 : index + 1;
			options[nextIndex].focus();
		}
	};

	useEffect(() => {
		const handleDocumentClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handleDocumentClick);
		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);

	return (
		<div className={styles.dropdown} onKeyDown={handleKeyDown} tabIndex="0">
			<div className={styles.dropdown_toggle} onClick={toggleDropdown}>
				{selectedOption || 'Select an option'}
			</div>
			{isOpen && (
				<div className={styles.dropdown_menu} ref={dropdownRef}>
					<div className={styles.dropdown_item} onClick={() => handleOptionClick('option1')} tabIndex="0">
						Option 1 asdfasdf
					</div>
					<div className={styles.dropdown_item} onClick={() => handleOptionClick('option2')} tabIndex="0">
						Option 2
					</div>
					<div className={styles.dropdown_item} onClick={() => handleOptionClick('option3')} tabIndex="0">
						Option 3
					</div>
				</div>
			)}
		</div>
	);
}

export default Faqs