import React from 'react'
import styles from './seoContent.module.css'
import seo_big from '../images/seo_img_big.png'

const SeoContent = () => {
	return (
		<div className={styles.main}>
			<section className={styles.main_img}>
				<img src={seo_big} alt="" />
			</section>
			<section className={styles.main_cont}>
				<h1 className={styles.cont_title}>
					Offline SEO
				</h1>
				<p className={styles.cont_text}>
					Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non,
					turpis. Nunc nonummy metus. Donec elit libero, sodales nec
				</p>
				<ul>
					<li>First Class Flights</li>
					<li>5 Star Accommadations</li>
					<li>Incuves Packages</li>
					<li>Latest Model Vechicles</li>
				</ul>
				<button className={styles.cont_check}>
					Check Our Work &#8594;
				</button>
			</section>
		</div>
	)
}

export default SeoContent
