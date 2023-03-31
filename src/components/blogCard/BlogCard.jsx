import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BlogCardItem } from '../../Contstants/BlogICardItem'
import styles from './BlogCard.module.css'
import side1 from '../images/BlogCard/side1.png'
import side2 from '../images/BlogCard/side2.png'
import side3 from '../images/BlogCard/side3.png'
import side4 from '../images/BlogCard/side4.png'



const BlogCard = () => {
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 8;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(BlogCardItem.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(BlogCardItem.length / itemsPerPage));

	}, [itemOffset, itemsPerPage])
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % BlogCardItem.length;

		setItemOffset(newOffset);
	};
	return (
		<div className={styles.main}>
			<div className={styles.blog_slider}>
				{
					currentItems.map((item) =>
						<div className={styles.card} key={item.id} style={
							{ backgroundImage: `url(${item.backImg})`, }
						}>
							<div>
								<span className={styles.subTitle}>{item.date}<span className={styles.dot}>&#183;</span>{item.time}</span>
								<h2 className={styles.comment}>{item.info}</h2>
							</div>
							<div className={styles.proff}>
								<img src={item.prof} alt="" />
								<span>{item.name}</span>
							</div>
						</div>
					)
				}
				<ReactPaginate
					breakLabel="..."
					nextLabel=" >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={pageCount}
					previousLabel="< "
					renderOnZeroPageCount={null}
					containerClassName={styles.pagination}
					pageLinkClassName={styles.page_num}
					previousLinkClassName={styles.page_num}
					nextLinkClassName={styles.page_num}
					activeClassName={styles.active}
				/>
			</div>
			<aside className={styles.side_bar}>
				<div className={styles.side_head}>
					
						<input type="text" placeholder='search...' />
			
					<h2>
						Categories
					</h2>
					<ul>
						<li>Marketing</li>
						<li>Community</li>
						<li>Tutrials</li>
						<li>Business</li>
						<li>Management</li>
					</ul>
				</div>
				<div className={styles.side_recent}>
					<h2>
						Recent Posts
					</h2>
					<div className={styles.side_card}>
						<img src={side1} alt="" />
						<div className={styles.card_post}>
							<p className={styles.card_title}>
								Understanding
								color theory: the color wheel and finding...
							</p>
							<p className={styles.subTitle}>
								November 7,2017	<span className={styles.dot}>&#183;</span> 8 min read
							</p>
						</div>
					</div>
					<div className={styles.side_card}>
						<img src={side2} alt="" />
						<div className={styles.card_post}>
							<p className={styles.card_title}>
								How to design a product that can grow itself 10x in year
							</p>
							<p className={styles.subTitle}>
								October 7,2017	<span className={styles.dot}>&#183;</span> 8 min read
							</p>
						</div>
					</div>
					<div className={styles.side_card}>
						<img src={side3} alt="" />
						<div className={styles.card_post}>
							<p className={styles.card_title}>
								Any mechanical keyboard enthusiasts in design?
							</p>
							<p className={styles.subTitle}>
								November 7,2017	<span className={styles.dot}>&#183;</span> 8 min read
							</p>
						</div>
					</div>
					<div className={styles.side_card}>
						<img src={side4} alt="" />
						<div className={styles.card_post}>
							<p className={styles.card_title}>
								Yo Reddit! What’s a small thing that anyone can do at nearly...
							</p>
							<p className={styles.subTitle}>
								May 7,2017	<span className={styles.dot}>&#183;</span> 8 min read
							</p>
						</div>
					</div>
				</div>
				<div className={styles.side_tags}>
					<h2>
						Pouplar Tags
					</h2>
				<div className={styles.tag_btn}>
						<button>Marketing</button>
						<button>Devolpment</button>
						<button>Banking</button>
						<button>HR&Recruting</button>
						<button>Design</button>
						<button>Management</button>
						<button>Business</button>
						<button>Community</button>
						<button>Tutorials</button>
				</div>
			<div className={styles.side_info}>
						<h3>Advertisement</h3>
						<p>
							Duis leo. Donec orci lectus, aliquam ut, faucibus non
						</p>
						<button>
							Go Now
						</button>
			</div>
				</div>
			</aside>
		</div>
	)
}

export default BlogCard;
