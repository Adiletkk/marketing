import React, { useRef } from 'react'
import Header from '../../Pages/HeaderPage/Header'
import styles from './blogHead.module.css'
import card from '../images/blogHeadCard.png'
import Comm1 from '../images/comm1.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const BlogHeader = () => {
	const arrowRef = useRef(null)

	const settings = {
		dots: true,
		dotsClass: `${styles.dots}`,
		className: `${styles.center}`,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<div className={styles.main_content}>
			<Header />
			<div className={styles.main}>

				<Slider ref={arrowRef} {...settings} >

					<div className={styles.slide_item}>
						<div className={styles.card_img}>
							<img src={card} alt="" />
						</div>
						<div className={styles.card1}>
							<div>
								<span className={styles.subTitle}>04 JUL 2021  <span className={styles.dot}>&#183;</span>   8 min read</span>
								<h2 className={styles.comment1}>How to Maximize Your ROI Through Scientific SEM?</h2>
								<p className={styles.card_info}>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
								</p>
							</div>
							<div className={styles.proff} >
								<img src={Comm1} alt="" />
								<span>Cruz Truong</span>
							</div>
						</div>
					</div>

					<div className={styles.slide_item}>
						<div className={styles.card_img}>
							<img src={card} alt="" />
						</div>
						<div className={styles.card1}>
							<div>
								<span className={styles.subTitle}>04 JUL 2021  <span className={styles.dot}>&#183;</span>   8 min read</span>
								<h2 className={styles.comment1}>How to Maximize Your ROI Through Scientific SEM?</h2>
								<p className={styles.card_info}>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
								</p>
							</div>
							<div className={styles.proff} >
								<img src={Comm1} alt="" />
								<span>Cruz Truong</span>
							</div>
						</div>
					</div>

				</Slider>

				<div className={styles.infoBtn}>
					<button
						onClick={() => arrowRef.current.slickPrev()}
						className={styles.btnLeft} >
						&larr;
					</button>
					<button
						onClick={() => arrowRef.current.slickNext()}
						className={styles.btnRight} >
						&rarr;
					</button>
				</div>
			</div>

		</div>
	)
}

export default BlogHeader
