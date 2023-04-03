import styles from './Faqs.module.css';
import Faqss from '../images/faqs_img.png';
import '../../App.css'
import { FaqsQuestions } from '../../Contstants/FaqsQuestions'
import Dropdown from '../DropDown/DropDown';

const Faqs = () => {
	const options = ['Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,'];

	const handleSelect = (option) => {
		console.log(`Selected option: ${option}`);
	};

	return (
		<div className={styles.main}>
			<section className={styles.list}>
				<span>FAQS</span>
				<h1>Frequently Asked <br /> Questions </h1>

				{
					FaqsQuestions.map((item) =>
						<Dropdown key={item.id} options={options} defaultOption={item.title} onSelect={handleSelect} />
					)
				}


			</section>
			<section className={styles.faqs_img}>
				<img src={Faqss} alt="" />
			</section>
		</div>
	)
}



export default Faqs