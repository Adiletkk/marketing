import React from "react";
import css from "./registration.module.css";
import foto from "../../foto/registration.png";
import mobile from "../../foto/mobile.png";
import cube from "../../foto//cube.png";
import email from "../../foto/email.png";
import clock from "../../foto/clock.png";
import geolocation from "../../foto/geolocation.png";

function Registration() {
  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <div className={css.left}>
          <div className={css.image_left}>
            <img src={foto} alt="" />
          </div>
        </div>
        <div className={css.right}>
          <div className={css.first_text_right}>
            <h1>Ready To Get Started?</h1>
          </div>
            <div className={css.two_text_right}>
              <p>Services</p>
            </div>
            <div className={css.last_wrapper}>
              <p>Email marketing</p>
              <p>SEO</p>
              <p> Social Marketing</p>
              <p>Research</p>
            </div>

            <div className={css.text_input}>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className={css.email_text}>
              <input type="text " placeholder="Email" />
            </div>
            <div className={css.number}>
              <input type="text" placeholder="Number" />
            </div>
            <div className={css.site_name}>
              <input type="text" placeholder="Company" />
              <input type="text" placeholder="Website" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
