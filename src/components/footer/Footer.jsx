import styles from './Footer.module.css'
import Mail from '../images/footer_mail.svg'
import Logo from '../images/foot_logo.svg'
import Fb from '../images/foot_fb.svg'
import Ins from '../images/foot_ins.svg'
import In from '../images/foot_in.svg'
import Twit from '../images/foot_twit.svg'
import FootMail from '../images/foot_mail.svg'
import FootLoc from '../images/foot_loc.svg'

const Footer = () => {

	return (
		<div className={styles.main}>
			<section className={styles.foot_head}>
				<div className={styles.head_left}>
					<img src={Mail} alt="" />

					<div>
						<h1 className={styles.head_title}>Sign Up For Newsletter </h1>
						<p className={styles.head_info}>Receive 50% discount on first project</p>
</div>
					
				</div>
<div className={styles.head_right}>
				<input className={styles.foot_inp} type="text" placeholder='Enter your email' />
				<button className={styles.foot_btn}>sign up</button>
</div>
			</section>

			<section className={styles.foot_feedback}>
				<div className={styles.feed_main}>
					<img className={styles.foot_logo} src={Logo} alt="" />
					<p className={styles.feed_text}>The starting point for your next project based on easy-to-customize
						Material-UI © helps you build apps faster and better.</p>

					<div className={styles.foot_link}>
						<button>
							<img className={styles.feed_link_hover} src={Fb} alt="" />
						</button>
						<button>
							<img className={styles.feed_link_hover} src={Ins} alt="" />
						</button>
						<button>
							<img className={styles.feed_link_hover} src={In} alt="" />
						</button>
						<button>
							<img className={styles.feed_link_hover} src={Twit} alt="" />
						</button>
					</div>
				</div>

				<div className={styles.foot_mail_content}>
					<div><img src={FootMail} alt="" /> <span className={styles.foot_mail}>info@example.com</span></div>
					<div><img src={FootLoc} alt="" /> <span className={styles.foot_mail} >655 Schaefer Dale</span></div>
				</div>
				<div className={styles.foot_send}>
					<input type="text" placeholder='Email address' /> <button className={styles.foot_btn_end}>&#62;</button>
				</div>
			</section>

			<section className={styles.foot_end}>
				<div className={styles.feed_text}>© 2021. All rights reserved</div>
				<div className={styles.foot_service} >
					<button className={styles.foot_end_btn} >Help Center</button>
					<button className={styles.foot_end_btn} >Terms of Service</button>
				</div>
			</section>

		</div>
	)
}

export default Footer
