import React from "react";
import styles from "./PriceInfo.module.css";
import Plane from "../images/plane.svg";
import StRocket from "../images/stRocket.svg";
import PrRocket from "../images/prRocket.svg";


const PriceInfo = () => {

	return (
		<div className={styles.price_page}>
			<section className={styles.head}>
				<div>
					<p className={styles.subTitle}>PRICING</p>
					<h1>Check Our Pricing</h1>
					<p className={styles.title_text}>
						Choose the perfect plan for your needs. Always flexible to grow
					</p>
				</div>
				<div className={styles.check}>
					<p>
						MONTHLY <input type="checkbox" />
						YEARLY (save 10%)
					</p>
				</div>
			</section>
			<section className={styles.price_list}>
				<div className={styles.price_item}>
					<div className={styles.price_child}>
						<div>
							<h2 className={styles.price_title}>Basic</h2>
							<p className={styles.price_val}>
								$29 <span className={styles.price_month}>/mo</span>
							</p>
						</div>
						<div className={styles.price_img}>
							<img src={Plane} alt="" />
						</div>
					</div>
					<p className={styles.price_text}>
						Proin viverra, ligula sit amet ultrices semper, ligula arcu
						tristique sapien
					</p>
					<ul>
						<li>Auto update mode</li>
						<li>Online operator 24/7</li>
						<li>International posting</li>
					</ul>
					<button className={styles.price_btn}>Get Started</button>
				</div>
				<div className={styles.price_item}>
					<div className={styles.price_child}>
						<div>
							<h2 className={styles.price_title}>Standard</h2>
							<p className={styles.price_val}>
								$59 <span className={styles.price_month}>/mo</span>
							</p>
						</div>
						<div className={styles.price_img}>
							<img src={StRocket} alt="" />
						</div>
					</div>

					<p className={styles.price_text}>
						Maecenas nec odio et ante <br /> tincidunt tempus.
					</p>
					<ul>
						<li>Auto update mode</li>
						<li>Online operator 24/7</li>
						<li>International posting</li>
						<li>Unique newsletters</li>
					</ul>
					<button className={styles.price_btn}>Get Started</button>
				</div>
				<div className={styles.price_item}>
					<div className={styles.price_child}>
						<div>
							<h2 className={styles.price_title}>Premium</h2>
							<p className={styles.price_val}>
								$99 <span className={styles.price_month}>/mo</span>
							</p>
						</div>
						<div className={styles.price_img}>
							<img src={PrRocket} alt="" />
						</div>
					</div>

					<p className={styles.price_text}>
						Sed lectus. Sed consequat, leo eget bibendum sodales
					</p>
					<ul>
						<li>Auto update mode</li>
						<li>Online operator 24/7</li>
						<li>International posting</li>
						<li>Unique newsletters</li>
						<li>20 Desing templates</li>
					</ul>
					<button className={styles.price_btn}>Get Started</button>
				</div>
			</section>
		</div>
	);
};

export default PriceInfo;
