import React from 'react'
import styles from './ServiceBlock.module.css'
import { servicesIncludes } from '../../Contstants/ServicesIncludes.js'


const ServiceBlock = () => {
	
	return (
		<div className={styles.main}>
			<h1 className={styles.main_title}>Service Include</h1>
			<p className={styles.main_info}>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
			<div className={styles.card_content}>
			{
				servicesIncludes.map((item, i) => 
					<div className={styles.service_card} key={i}>
						<div>
							<img src={item.img} alt="" />

						</div>
						<div className={styles.card_title}>
							{item.title}
						</div>
						<div className={styles.card_text}>
							{item.text}
						</div>
					</div>
				)
			}
			</div>
		</div>
	)
}

export default ServiceBlock;
