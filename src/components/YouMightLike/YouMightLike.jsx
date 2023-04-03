import React from 'react'
import styles from './YouMightLike.module.css'
import { DataImgPagination } from '../../Contstants/PaginationData'
import { NavLink } from 'react-router-dom'


const YouMightLike = () => {
	const arr = DataImgPagination.slice(0, 3)
	return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>You Might Like You</h1>
        <NavLink to="/thirdPage">view ALL &#10141;</NavLink>
      </div>
      <div className={styles.main_card}>
        {arr.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.card_img}>
              <img src={item.img} alt="" />
            </div>
            <p className={styles.card_title}>{item.subTitle}</p>
            <div>
              <p className={styles.card_info}>{item.info}</p>
              <p className={styles.card_info}>{item.tips}</p>
            </div>
          </div>
        ))}
        <NavLink to="/thirdPage">view ALL &#10141;</NavLink>
      </div>
    </div>
  );
}

export default YouMightLike
