import React from 'react'
import css from './BankCard.module.css'
import bcard from '../../foto/bcard1.png'
import bcard2 from '../../foto/bcard2.png'
import bcard3 from '../../foto/bcard3.png'
import bcard4 from '../../foto/bcard4.png'


function BankCard() {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <p>Work Flow</p>
        <h1 className={css.card_title}>Work Flow</h1>
        <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
        </div>
        <div className={css.bankcard}>
            <div className={css.bcard}>
                <img src={bcard} alt="" />
                <h2 className={css.endl}>Planning</h2>
            </div>
            <div className={css.bcard2}>
                <img src={bcard2} alt="" />
                <h2 className={css.endl}>Research</h2>
            </div>
            <div className={css.bcard3}>
                <img src={bcard3} alt="" />
                <h2 className={css.endl}>Optimizing</h2>
            </div>
            <div className={css.bcard4}>
                <img src={bcard4} alt="" />
                <h2 className={css.endl}>Results</h2>
            </div>

           
        </div>
    </div>
  )
}

export default BankCard