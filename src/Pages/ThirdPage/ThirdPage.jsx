import React from 'react'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Footer from '../../components/footer/Footer'
import Form from '../../components/formRegist/Form'
import OurCaseStudies from '../../components/ourCaseStudies/OurCaseStudies'
import Posts from '../../components/posts/Posts'
import Header from '../HeaderPage/Header'

const ThirdPage = () => {
  return (
	<div>
		<Header/>
	  <OurCaseStudies/>
	  <DevCommentsBlock/>
	  <Posts/>
	  <Form/>
	  <Footer/>
	</div>
  )
}

export default ThirdPage
