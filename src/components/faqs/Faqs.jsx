import React from 'react';
import styles from './Faqs.module.css';
import Faqss from '../images/faqs_img.png';



const Faqs = () => {
	return (
		<div className={styles.main}>
			<section className={styles.list}>
				<span>FAQS</span>
				<h1>Frequently Asked Questions</h1>
				<h5>Sed augue ipsum, egestas nec, vestibulum et</h5>
				<h5>Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.</h5>
				<h5>Ut varius tincidunt libero.</h5>
				<h5>In ut quam vitae odio lacinia tincidunt.</h5>
				<h5>Fusce vel dui Morbi nec metus.</h5>
			</section>
			<section>
				<img src={Faqss} alt="" />
			</section>
		</div>
	)
}

export default Faqs
