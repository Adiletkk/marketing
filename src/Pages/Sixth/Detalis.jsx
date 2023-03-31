import React from 'react'
import Marketingblock from '../../components/Marketingblock/Marketingblock'
import Header from '../HeaderPage/Header'
import Posts from '../../components/posts/Posts'
import Form from '../../components/formRegist/Form'
import Footer from '../../components/footer/Footer'

const Detalis = () => {
	return (

		<div>
			<Header />
			<Marketingblock />
			<Posts/>
			<Form/>
			<Footer/>
		</div>
	)
}

export default Detalis
