import React from 'react'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Footer from '../../components/footer/Footer'
import Form from '../../components/formRegist/Form'
import Marketingblock from '../../components/Marketingblock/Marketingblock'
import OurCaseStudies from '../../components/ourCaseStudies/OurCaseStudies'
import Posts from '../../components/posts/Posts'
import Projectbrief from '../../components/Projectbrief/Projectbrief'
import Showtest from '../../propselem/Showtest/Showtest'
import Header from '../HeaderPage/Header'

const ThirdPage = () => {
	return (
		<div>
			<Header />
			<OurCaseStudies />
			<DevCommentsBlock />
			<Posts />
			<Form />
			<Footer />
				<Showtest />
				<Projectbrief />
				<Marketingblock />
		</div>
	)
}

export default ThirdPage
