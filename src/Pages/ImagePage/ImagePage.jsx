import React from 'react'
import css from './ImagePage.module.css'
import brand from '../../foto/brand1.png'
import brand2 from '../../foto/brand2.png'
import brand3 from '../../foto/brand3.png'
import brand4 from '../../foto/brand4.png'
import brand5 from '../../foto/brand5.png'
import brand6 from '../../foto/brand6.png'
import image from '../../foto/image1.png'


function ImagePage() {
  return (
    <div className={css.wrapper}>
         <div className={css.footer}>
    <img src={brand} alt="" />
    <img src={brand2} alt="" />
    <img src={brand3} alt="" />
    <img src={brand4} alt="" />
    <img src={brand5} alt="" />
    <img src={brand6} alt="" />
  </div>
  <img className={css.center} src={image} alt="" />
  </div>
  )
}

export default ImagePage