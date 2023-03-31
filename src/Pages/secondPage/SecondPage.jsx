import React from 'react'
import Benefitsachieved from '../../components/Benefitsachieved/Benefitsachieved'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Footer from '../../components/footer/Footer'
import Form from '../../components/formRegist/Form'
import Howitworks from '../../components/Howitworks/Howitworks'
import OfflineSeo from '../../components/offlineSeo/OfflineSeo'
import Posts from '../../components/posts/Posts'
import SeoContent from '../../components/seoContent/SeoContent'
import ServiceBlock from '../../components/serviceBlock/ServiceBlock'


function SecondPage() {
	return (
		<div>
			<OfflineSeo/>
			<SeoContent />
			<ServiceBlock/>
			<Benefitsachieved/>
			<Howitworks/>
			<DevCommentsBlock/>
			<Posts/>
			<Form/>
			<Footer/>
		</div>
	)
}

export default SecondPage
