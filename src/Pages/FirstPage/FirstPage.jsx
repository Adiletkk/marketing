import React from 'react'
import Footer from '../../components/footer/Footer'
import HomePage from '../HomePage/HomePage'
import HomePart from '../House_Part/HomePart'
import ThirdPage from '../ThirdPage/ThirdPage'

const FirstPage = () => {
	return (
		<>
			<HomePage />
			<HomePart />
			<Footer />
			<ThirdPage/>
		</>
	)
}

export default FirstPage
