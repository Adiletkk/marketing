import styles from './DevComments.module.css'
import Robert from '../images/robert.png'

const DevCommentsBlock = () => {
	return (
		<section className={styles.main}>
			<div className={styles.main_content}>
		
					<span className={styles.subTitle}>Testimonials</span>
					<h1 className={styles.title}>Who Love Our Work</h1>
				
				<div className={styles.info}>
					<span className={styles.text}>Amazing experience i love it a lot.
						Thanks to the team <br /> that dreams come true, great! I appreciate there 
						<br /> attitude and approach.</span>
					<div >
						<img src={Robert} alt="" />
						<p className={styles.name}>Robert Fox</p>
						<p className={styles.proff}>Designer</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DevCommentsBlock