import React from "react";
import css from "./Pageseven.module.css";
import planet from "../../foto/planetendl.png";
import orange from "../../foto/orange.png";
import blue from "../../foto/blue.png";
import yellow from "../../foto/yellow.png";
import green from "../../foto/green.png";
import phonimage from "../../foto/playerphon.png";
import handcard from "../../foto/handcard.png";
import humoncard from "../../foto/humancard.png";
import textcard from "../../foto/textcard.png";
import likecard from "../../foto/likecard.png";
// import Showtest from "../../propselem/Showtest/Showtest";
// import DevCommentsBlock from "../devComemmentsBLock/DevCommentsBlock";
import logo1 from "../../foto/google.png";
import logo2 from "../../foto/spotify.png";
import logo3 from "../../foto/vimeo.png";
import logo4 from "../../foto/slack.png";
import logo5 from "../../foto/netfliks.png";
import logo6 from "../../foto/microsoft.png";
import logo7 from "../../foto/airbnb.png";
import logo8 from "../../foto/trip.png";

function Pageseven() {
  return (
    <div className={css.wrapper}>
      <div className={css.top_header}>
        <div className={css.left}>
          <img src={planet} alt="" />
        </div>
        <div className={css.right}>
          <h1>Who We Are?</h1>
          <p>
            Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc
            fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis,
            molestie non, velit.
          </p>
          <p>
            Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere
            iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
            Praesent venenatis metus at tortor pulvinar varius.
          </p>
          <button>Check Our Work→</button>
        </div>
      </div>
      <div className={css.round}>
        <div className={css.first}>
          <img src={orange} alt="" />
          <h2 id={css.color_text}>12</h2>
          <p>Years of experience</p>
        </div>
        <div className={css.two}>
          <img src={blue} alt="" />
          <h2 id={css.color_text}>20</h2>
          <p>Awards</p>
        </div>
        <div className={css.three}>
          <img src={yellow} alt="" />
          <h2 id={css.color_text}>150</h2>
          <p>Projects</p>
        </div>
        <div className={css.four}>
          <img src={green} alt="" />
          <h2 id={css.color_text}>32k</h2>
          <p>Happy clients</p>
        </div>
      </div>
      <div className={css.center_image}>
        <img src={phonimage} alt="" />
      </div>
      <div className={css.center_text}>
        <h1>Our Core Values</h1>
        <div className={css.card_slider}>
          <div className={css.card_one}>
            <img src={likecard} alt="" />
            <h3>Customer Satisfaction</h3>
            <p id={css.p_color}>
              Aenean urna dictum adipiscing nec, cras quisque.
            </p>
          </div>
          <div className={css.card_two}>
            <img src={textcard} alt="" />
            <h3>Transparency</h3>
            <p id={css.p_color}>
              Aenean urna dictum adipiscing nec, cras quisque.
            </p>
          </div>
          <div className={css.card_three}>
            <img src={humoncard} alt="" />
            <h3>Reputation</h3>
            <p id={css.p_color}>
              Aenean urna dictum adipiscing nec, cras quisque.
            </p>
          </div>
          <div className={css.card_four}>
            <img src={handcard} alt="" />
            <h3>Cooperation</h3>
            <p id={css.p_color}>
              Aenean urna dictum adipiscing nec, cras quisque.
            </p>
          </div>
        </div>
      </div>
      <div className={css.top}>
        <h1 className={css.top_title}>Our Story</h1>
        <p className={css.top_text}>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>

      <div className={css.bottom}>
        <section className={css.bot_right}>
          <div className={css.content_info1}>
            <span className={css.content_subtitle}>2021</span>
            <h5>Business Conception</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={css.content_info3}>
            <span className={css.content_subtitle}>2019</span>
            <h5>Legal Rewiew</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </section>

        <section className={css.bot_left}>
          <div className={css.content_info2}>
            <span className={css.content_subtitle}>2020</span>
            <h5>Infrastucture Design</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={css.content_info4}>
            <span className={css.content_subtitle}>2018</span>
            <h5>Company Established</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </section>
      </div>
      <div className={css.top}>
        <h1 className={css.top_title}>Great Team Is The Key</h1>
        <p className={css.top_text}>
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
        {/* <div className={css.slider}> */}
        {/* <Showtest/> */}
        {/* </div> */}
        {/* <div className={css.slider_dev}> */}
        {/* <DevCommentsBlock/> */}
        {/* </div> */}
        <div className={css.endl_logo}>
          <h1>Our Clients</h1>
          <div className={css.last_logo}>
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
            <div>
              <img src={logo5} alt="" />
            </div>
            <div>
              <img src={logo6} alt="" />
            </div>
            <div>
              <img src={logo7} alt="" />
            </div>
            <div>
              <img src={logo8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pageseven;
