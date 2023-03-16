import React from "react";
import css from "./MoreCard.module.css";
import image1 from "../../foto/moreimage.png";
import image2 from '../../foto/moreimage2.png'
import image3 from '../../foto/moreimage3.png'
import image4 from '../../foto/moreimage4.png'
import image6 from '../../foto/moreimage6.png'
import image7 from '../../foto/moreimage7.png'









function MoreCard() {
  return (
    <div className={css.wrapper}> 
    <p>Our Work</p> 
    <h1>Case Studies</h1> 
    <div className={css.main}> 
      <div className={css.left}> 
        <img src={image2} alt="" /> 
        <div className={css.text}> 
          <p>marketing</p> 
          <h1>General Electric</h1> 
        </div> 
      </div> 
      <div className={css.center}> 
        <div className={css.up}> 
          <img src={image1} alt="" /> 
          <div className={css.info}> 
            <b>branding</b> 
            <h1>Bank of America</h1> 
            <p> 
              Quisque id odio. Nunc egestas, augue at pellentesque laoreet, 
              felis eros vehicul 
            </p> 
            <button>Learn more →</button> 
          </div> 
          <div className={css.centerRight}> 
            <img src={image3} alt="" /> 
            <div className={css.text2}> 
              <p>SEO</p> 
              <h1>Louis Vuitton</h1> 
            </div> 
          </div> 
        </div> 
        <div className={css.bottomCenter}> 
          <div className={css.centerLeft}> 
            <img src={image7} alt="" /> 
            <div className={css.text3}> 
              <p>MARKETING</p> 
              <h1>Gillette</h1> 
            </div> 
          </div> 
          <div className={css.bottom}> 
            <img src={image6} alt="" /> 
            <div className={css.infotext4}> 
              <b>SOCIAL</b> 
              <h1>Louis Vuitton</h1> 
              <p> 
                Quisque id odio. Nunc egestas, augue at pellentesque laoreet, 
                felis eros vehicul 
              </p> 
              <button>Learn more →</button> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div className={css.right}> 
        <img src={image4} alt="" /> 
        <div className={css.text4}> 
          <p>web</p> 
          <h1>Gillette</h1> 
        </div> 
      </div> 
    </div> 
    <button className={css.viewbtn}>View All →</button> 
  </div> 
  );
}

export default MoreCard;
