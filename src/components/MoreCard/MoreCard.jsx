import React from "react";
import css from "./MoreCard.module.css";
import card1 from '../images/BlogCard/card1.png'
import card2 from '../images/BlogCard/card2.png'
import card3 from '../images/BlogCard/card3.png'
import card4 from '../images/BlogCard/card4.png'
import card5 from '../images/BlogCard/card5.png'
import card6 from '../images/BlogCard/card6.png'






function MoreCard() {
  return (
    <>
      <div className={css.header}>
        <h5 className={css.subTitle}>Our work</h5>
        <h1 className={css.title}>Case Studies</h1>
      </div>
    <div className={css.main}>

      <section className={css.main_left}>
        <div className={css.card_left}>
          <p>MARKITING</p>
          <p>General Electric</p>
        </div>
      </section>


      <section section className={css.main_mid}>

        <div className={css.mid_top}>
          <div className={css.mid_item}>
            <div className={css.mid_img}>

            </div>
            <div className={css.mid_info}>
              <p className={css.mid_title}>
                BRANDING
              </p>
              <h4 className={css.mid_subTitle}>
                Bank of America
              </h4>
              <p className={css.mid_text}>
                Quisque id odio. Nunc
                egestas, augue at pellentesque laoreet, felis eros vehicul
              </p>
              <button className={css.mid_btn}>
                Learn more &#8594;
              </button>
            </div>
          </div>
          <div className={css.mid_card}>
            <p className={css.card_sutTitle}>
              SEO
            </p>
            <p className={css.card_title}>
              Louis Vuitton
            </p>
          </div>
        </div>


        <div className={css.mid_bottom}>
          <div className={css.mid_card}>
            <p className={css.card_sutTitle}>
              MARKITING
            </p>
            <p className={css.card_title}>
              Gillette
            </p>
          </div>
          <div className={css.mid_item}>
            <div className={css.mid_imgb}>

            </div>
            <div className={css.mid_info}>
              <p className={css.mid_title}>
                SOCIAL
              </p>
              <h4 className={css.mid_subTitle}>
                Louis Vuitton
              </h4>
              <p className={css.mid_text}>
                Quisque id odio. Nunc
                egestas, augue at pellentesque laoreet, felis eros vehicul
              </p>
              <button className={css.mid_btn}>
                Learn more &#8594;
              </button>
            </div>
          </div>
        </div>


      </section >

      <section className={css.main_right}>
        <div className={css.card_right}>
          <p>MARKITING</p>
          <p>General Electric</p>
        </div>

      </section>
<div className={css.mob_card}>
  <img src={card1} alt="" />
  <img src={card2} alt="" />
  <img src={card3} alt="" />
  <img src={card4} alt="" />
  <img src={card5} alt="" />
  <img src={card6} alt="" />
</div>

    </div>
    </>
  );
}

export default MoreCard;
