import React from 'react'
import Posts from '../../components/posts/Posts'
import TeamInfo from '../../components/userBlock/TeamInfo'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Faqs from '../../components/faqs/Faqs'
import PriceInfo from '../../components/layout-userLock/PriceInfo'

const HomePart = () => {
	return (
		<div>
			<TeamInfo />
			<PriceInfo />
			<Faqs />
			<DevCommentsBlock />
			<Posts />
		</div>
	)
}

export default HomePart
