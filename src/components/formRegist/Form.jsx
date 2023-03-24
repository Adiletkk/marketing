import React from 'react'
import styles from './form.module.css'
import mail from '../images/formMail.svg'
import Loc from '../images/formLoc.svg'

function Form() {

	return (
		<section className={styles.main}>
			<div className={styles.form_info}>
				<h1 className={styles.title}>Get Free <br />
					SEO Analysis</h1>
				<div className={styles.form_item}>
					<p> <img src={mail} alt="" /> <span className={styles.mr}>Hello@agency.com</span></p>
					<p>  <img src={Loc} alt="" />
						<span className={styles.mr}>508 Bridle Avenue Newnan, GA 30263</span></p>
				</div>
			</div>

			<div className={styles.form_regis}>
				<input className={styles.form_inp} placeholder=' name' type="text" />
				<input className={styles.form_inp} placeholder=' Email' type="email" />
				<input className={styles.form_inp} placeholder=' Phone' type="number" />
				<input className={styles.form_inp} placeholder=' Website URL' type="text" />
				<button className={styles.formBtn}>Send Request</button>
			</div>
		</section>
	)
}

export default Form
