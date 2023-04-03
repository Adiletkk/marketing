import React from 'react'
import css from './Main.module.css'
import image from '../../foto/image.png'
import play from '../../components/images/play.png'



function Main() {
  return (
    <div className={css.wrapper}>
      <div className={css.text}>
        <div className={css.colortext}>Digital Marketing</div>
        <div className={css.long}>Boosts Your Website Traffic</div>
        <div className={css.smal}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus
          ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </div>
        <div className={css.endl}>
          <button className={css.btn}>TryForFree</button>
          <button className={css.btn_play}>
            <img src={play} alt="" />
          </button>
          <p className={css.small}> See Our Work</p>
        </div>
      </div>
      <div className={css.image}>
        <img src={image} alt="" />

      </div>
    </div>
  )
}

export default Main