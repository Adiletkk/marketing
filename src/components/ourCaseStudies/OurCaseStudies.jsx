import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { DataImgPagination } from '../../Contstants/PaginationData'
import styles from './OurCaseStudies.module.css'






const OurCaseStudies = () => {
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	useEffect(()=>{
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems (DataImgPagination.slice(itemOffset, endOffset));
		setPageCount (Math.ceil(DataImgPagination.length / itemsPerPage));

	}, [itemOffset, itemsPerPage])
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % DataImgPagination.length;
	
		setItemOffset(newOffset);
	};
	return (
		<section className={styles.content}>
			<header className={styles.content_head}>
				<h1>
					Our Case Studies
				</h1>
				<p>
					Nullam tincidunt adipiscing enim. Mauris
					sollicitudin fermentum libero.
				</p>
			</header>
			<nav className={styles.navbar}>
				<p>All</p>
				<p>Branding</p>
				<p>Digital</p>
				<p>Marketing</p>
				<p>SEO</p>
				<p>Devolopment</p>
			</nav>
	<main className={styles.main} >
			{currentItems.map((item) =>
			
					<div key={item.id} className={styles.card}>
					<div className={styles.card_img} >
						<img src={item.img} alt="" />
					</div>
						<p className={styles.card_title}>{item.subTitle}</p>
				<div>
						<p className={styles.card_info}>{item.info}</p>
						<p className={styles.card_info}>{item.tips}</p>
				</div>
					</div>
				
			)

			}
</main>
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

		
		
		</section>
	)
}

export default OurCaseStudies
