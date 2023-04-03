import { useState } from 'react';
import styles from './DropDown.module.css' 


function DropDown({ options, defaultOption, onSelect }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onSelect) {
			onSelect(option);
		}
	};

	return (
		<div className={styles.dropdown}>
			<div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
				<div className={styles.subTitle}>{selectedOption} </div> <div className={styles.plus}>{isOpen?'-':'+'}</div>
				<i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
				
			</div>
			{isOpen && (
				<div className={styles.item}>
					{options.map((option) => (
						<p className={styles.text} key={option} onClick={() => handleOptionClick(option)}>
							{option}
						</p>
					))}
				</div>
				
			)}
		</div>
	);
}

export default DropDown;
