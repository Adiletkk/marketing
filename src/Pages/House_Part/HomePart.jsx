import React from 'react'
import Posts from '../../components/posts/Posts'
import TeamInfo from '../../components/userBlock/TeamInfo'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Faqs from '../../components/faqs/Faqs'
import PriceInfo from '../../components/layout-userLock/PriceInfo'
import Form from '../../components/form/Form'

const HomePart = () => {
	return (
		<div>
			<TeamInfo />
			<PriceInfo />
			<Faqs />
			<DevCommentsBlock />
			<Posts />
			<Form/>
		</div>
	)
}

export default HomePart
