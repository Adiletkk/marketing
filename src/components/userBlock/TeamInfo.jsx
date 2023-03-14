import React from "react";
import styles from './TeamInfo.module.css'
import Pena from '../images/pena.svg'
import Marvin from '../images/marvin.svg'
import Ralph from '../images/ralpin.svg'
import Right from '../images/right.svg'
import Left from '../images/left.svg'


const TeamInfo = () => {
	return (
		<div className={styles.main}>
			<div className={styles.info}>
				<div className={styles.infoItem}>
					<span className={styles.subTitle}>Team</span>
					<h1 className={styles.title}>Meet Our Team</h1>
					<p className={styles.text}>Since wire-frame renderings are relatively
						simple and fast to calculate, they are often used in cases</p>
				</div>

				<div className={styles.infoBtn}>
					<button className={styles.btnColor} >
						<img src={Left} alt="" />
					</button>
					<button className={styles.btnColor} >
						<img src={Right} alt="" />
					</button>
				</div>

			</div>

			<div className={styles.card}>
				<div>
					<div className={styles.cardImg}>
						<img className={styles.imgBurder} src={Pena} alt="" />

					</div>
					<p className={styles.cardName}>Ralph Edwards</p>
					<p className={styles.cardProff}>Project Manager</p>
				</div>
				<div>
					<div className={styles.cardImg}>
						<img className={styles.imgBurder} src={Ralph} alt="" />

					</div>
					<p className={styles.cardName}>Marvin McKinney</p>
					<p className={styles.cardProff}>Full Stack Devolper</p>
				</div>

				<div>

					<div className={styles.cardImg}>
						<img className={styles.imgBurder} src={Marvin} alt="" />

					</div>
					<p className={styles.cardName}>Eleanor Pena</p>
					<p className={styles.cardProff}>UI Designer</p>
				</div>
			</div>

		</div>
	)
}


export default TeamInfo;