import React from 'react'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Footer from '../../components/footer/Footer'
import Form from '../../components/formRegist/Form'
import Projectbrief from '../../components/Projectbrief/Projectbrief'
import YouMightLike from '../../components/YouMightLike/YouMightLike'

const CaseStudios = () => {
	return (
		<>
			<Projectbrief />
			<DevCommentsBlock />
			<YouMightLike />
			<Form />
			<Footer />
		</>
	)
}

export default CaseStudios
