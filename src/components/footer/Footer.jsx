import styles from './Footer.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}
		return (
			<div className={styles.main}>
				<Slider {...settings}>
					<div key={1}>
						<h3>1</h3>
					</div>
					<div key={2}>
						<h3>2</h3>
					</div>
					<div key={3}>
						<h3>3</h3>
					</div>
					<div key={4}>
						<h3>4</h3>
					</div>
					<div key={5}>
						<h3>5</h3>
					</div>
					<div key={6}>
						<h3>6</h3>
					</div>
				</Slider>
				{/*<div style={{ textAlign: "center" }}>
					<button className="button" onClick={slickNext}>
						Previous
					</button>
					<button className="button" onClick={slickPerv}>
						Next
					</button>
				</div>*/}
			</div>
		)
	}

	export default Footer
