import React from 'react'
import css from './Main.module.css'
import image from '../../foto/image.png'
import play from '../../foto/#.png'



function Main() {
  return (
    <div className={css.wrapper}>
        <div className={css.text}>
        <div className={css.colortext}>Digital Marketing</div>
        <div className={css.long}>Boosts Your <br/>Website Traffic</div>
        <div className={css.smal}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus 
        <br/> ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </div>
        <div className={css.endl}>
        <button className={css.btn}>TryForFree</button>
        <img src={play} alt="" />
        <div className={css.smal}> See Our Work</div>
        </div>
        </div>
        <div className={css.image}>
        <img src={image} alt="" />
       
        </div>
    </div>
  )
}

export default Main