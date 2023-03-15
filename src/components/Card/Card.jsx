import React from 'react'
import css from './Card.module.css'
import card from '../../foto/card1.png'
import card2 from '../../foto/card2.png'
import card3 from '../../foto/card3.png'
import card4 from '../../foto/card4.png'


function Card() {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <p>OUR SERViCES</p>
        <h1>We Provide</h1>
        <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
        </div>
        <div className={css.slider}>
            <div className={css.slidecard1}>
              <img src={card} alt="" />
              <h1 className={css.text}>SEO</h1>
                <p className={css.text}>Nunc nonummy metus. Donec elit libero</p>
                <button className={css.btn}> 🠖</button>
             </div>
             <div className={css.slidecard2}>
              <img src={card2} alt="" />
              <h1 className={css.text}>Email Marketing</h1>
                <p className={css.text}>Nunc nonummy metus. Donec elit libero</p>
                <button className={css.btn}> 🠖</button>
             </div>
             <div className={css.slidecard3}>
              <img src={card3} alt="" />
              <h1 className={css.text}>Search Engine Oprimization</h1>
                <p className={css.text}>Nunc nonummy metus. Donec elit libero</p>
                <button className={css.btn}> 🠖</button>
             </div>
             <div className={css.slidecard4}>
              <img src={card4} alt="" />
              <h1 className={css.text}> Social Marketing</h1>
                <p className={css.text}>Nunc nonummy metus. Donec elit libero</p>
                <button className={css.btn}>🠖</button>
             </div>
        </div>
    </div>
  )
}

export default Card