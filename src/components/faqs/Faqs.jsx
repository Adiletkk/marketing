import styles from './Faqs.module.css';
import Faqss from '../images/faqs_img.png';
import '../../App.css'
//import { FaqsQuestions } from '../../Contstants/FaqsQuestions'
//import FaqsCard from '../faqsCard/FaqsCard';


const Faqs = () => {

	
	return (
		<div className={styles.main}>
			<section className={styles.list}>
				<span>FAQS</span>
				<h1>Frequently Asked Questions </h1>
				{/*{FaqsQuestions.map((item) =>
					<div key={item.id}>
						<div>{item.title} <button onClick={() => setModal(!modal)}>
							
							{!modal ? (
							<span>+</span>
							) : (
								<span>-</span>
							)}
							</button> 
						</div>
						{
							modal && (
								<div>{item.text}</div>
								)
						}
						<div className={`modal modal-${modal}`}>{item.text}</div>
					</div>
				)}*/}
				{/*<FaqsCard title={FaqsQuestions.title} text={FaqsQuestions.text}/>*/}

			</section>
			<section>
				<img src={Faqss} alt="" />
			</section>
		</div>
	)
}

export default Faqs