import React from "react";
import css from "./Marketingblock.module.css";
import fon from "../../foto/bigimg.png";
import humon from "../../foto/humon.png";
import send from "../../foto/send.png";
import like from "../../foto/like.png";
import fonimg from "../../foto/foncard.png";
import dot from "../../foto/dot.png";
import jub from "../../foto/jub.png";
import instagrambtn from "../../foto/instagrambtn.png";
import twitterbtn from "../../foto/twitterbtn.png";
import facebookbtn from "../../foto/facebookbtn.png";
import linkedinbtn from "../../foto/linkedinbtn.png";
import faceboock from "../../foto/facebook2.png";
import instagram from "../../foto/instagram2.png";
import inspng from "../../foto/inspng.png";
import twitter from "../../foto/twitter2.png";

function Marketingblock() {
  return (
    <div className={css.wrapper}>
      <div className={css.image_center}>
        <img src={fon} alt="" />
      </div>
      <div className={css.text_center}>
        <p id={css.text_color}>8 minutes read</p>
        <h1 id={css.text_size}>
          The Complete Digital Marketing Course - 12 Courses in 1
        </h1>
        <h2>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </h2>
      </div>
      <div className={css.long_card}>
        <div className={css.left}>
          <div className={css.image}>
            <img src={humon} alt="" />
          </div>
          <div className={css.text_left}>
            <h3>Jane Cooper</h3>
            <p id={css.text_color}>February 28, 2018</p>
          </div>
        </div>
        <div className={css.right}>
          <img src={send} alt="" />
          <img src={like} alt="" />
        </div>
      </div>
      <div className={css.text_bottom}>
        <div className={css.text_top}>
          <p>
            <h2>P</h2>ellentesque posuere. Phasellus a est. Suspendisse
            pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh,
            nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut
            metus varius laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
        <p>Donec posuere vulputate arcu. Quisque rutrum.</p>
        <p>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula. Pellentesque posuere. Phasellus a est. Suspendisse
          pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh,
          nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut
          metus varius laoreet. Praesent egestas tristique nibh.
        </p>
      </div>
      <div className={css.text_bottom_center}>
        <img src={fonimg} alt="" />
      </div>
      <div className={css.text_bottom_text}>
        <h1>Curabitur suscipit suscipit tellus</h1>
        <p>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </p>
        <h1>Nullam accumsan lorem in</h1>
        <p>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </p>
      </div>
      <div className={css.text_bottom_dot}>
        <img src={dot} alt="" />
        <h1>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo.
        </h1>
      </div>
      <div className={css.image_bottom}>
        <img src={jub} alt="" />
        <div className={css.image_text_bottom}>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
          <p>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula
          </p>
        </div>
        <div className={css.last_ikon}>
          <h2 id={css.black}>Tags:</h2>
          <h3 id={css.silver}>Marketing</h3>
          <h3 id={css.silver}>Development</h3>
          <h3 id={css.silver}>HR & Recruting</h3>
          <h3 id={css.silver}>Design</h3>
          <h3 id={css.silver}>Management</h3>
        </div>
        <div className={css.footer_ikon}>
          <h1>Share:</h1>
          <p>
            <img src={facebookbtn} alt="" />
          </p>
          <p>
            <img src={instagrambtn} alt="" />
          </p>
          <p>
            <img src={linkedinbtn} alt="" />
          </p>
          <p>
            <img src={twitterbtn} alt="" />
          </p>
        </div>
        <div className={css.footer}>
        <div className={css.left_endl}>
          <img src={humon} alt="" />
        </div>
        <div className={css.center_endl}>
          <h1>Courtney Henry</h1>
          <p>Curator of Marketing Course</p>
          <p>Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
             Maecenas ullamcorper, dui et placerat feugiat,
             eros pede varius nisi, condimentum viverra felis nunc et lorem..</p>
             <p>Member since Mar 15, 2021</p>
        </div>
        <div className={css.right_endl}>
          <img src={faceboock} alt="" />
          <img src={instagram} alt="" />
          <img src={inspng} alt="" />
          <img src={twitter} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Marketingblock;
