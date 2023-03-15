import Comm1 from '../images/comm1.svg'
import Comm2 from '../images/comm2.svg'
import Comm3 from '../images/comm3.svg'
import styles from './Posts.module.css'

const Posts = () => {
	return (
		<section className={styles.main}>
			<div><h1>Latest Posts</h1></div>
			<div className={styles.content}>
				<div className={styles.card}>
					<div>
						<span className={styles.subTitle}>15 DEC 2020  <span className={styles.dot}>&#183;</span>   8 min read</span>
						<h2 className={styles.comment}>Any mechanical keyboard enthusiasts in design?</h2>
					</div>
					<div className={styles.proff} >
						<img src={Comm1} alt="" />
						<span>Maddox Fletcher</span>
					</div>
				</div>

		        		<div className={styles.card1}>
					<div>
						<span className={styles.subTitle}>04 JUL 2021  <span className={styles.dot}>&#183;</span>   8 min read</span>
						<h2 className={styles.comment1}>How to design a product that can grow itself 10x in year:</h2>
					</div>
					<div className={styles.proff} >
						<img src={Comm2} alt="" />
						<span>Cruz Truong</span>
					</div>
				</div>
				<div className={styles.card}>
					<div>
						<span className={styles.subTitle}>15 DEC 2020  <span className={styles.dot}>&#183;</span>   8 min read</span>
						<h2 className={styles.comment}>Any mechanical keyboard enthusiasts in design?</h2>
					</div>
					<div className={styles.proff} >
						<img src={Comm3} alt="" />
						<span>Maddox Fletcher</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Posts