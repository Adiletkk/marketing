import React from "react";
import css from "./Teamcard.module.css";
import facebook from "../../foto/facebook.png";
import instagram from "../../foto/instagram.png";
import inl from "../../foto/in.png";
import twitter from "../../foto/twitter.png";

function Teamcard({ img, title, prof }) {
  return (
    <div className={css.card}>
      <div className={css.img}>
        <img className={css.human} src={img} alt='img' />
        <div className={css.social}>
        <img src={facebook} alt='facebook' />
        <img src={instagram} alt='instagram'/>
        <img src={inl} alt='in' />
        <img src={twitter} alt='twitter' />
      </div>
      </div>
      <h1>{prof}</h1>
      <p>{title}</p>
      <div className={css.icons}>
     
      </div>
    </div>
  );
}

export default Teamcard;
