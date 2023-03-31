import React from 'react'
import BlogCard from '../../components/blogCard/BlogCard'
import BlogHeader from '../../components/blog_marketing_head/BlogHeader'
import Footer from '../../components/footer/Footer'
import Form from '../../components/formRegist/Form'

const MarketingBlog = () => {
	return (
		<>
			<BlogHeader />
			<BlogCard />
			<Form/>
			<Footer/>
		</>
	)
}

export default MarketingBlog
