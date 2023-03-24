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


    </div>
  );
}

export default MoreCard;
