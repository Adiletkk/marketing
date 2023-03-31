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
          <div className={css.left_state}>
        <div className={css.first_state}>
            <img src={geolocation} alt="" />
            <h3>Visit us</h3>
            <img src={cube} alt="" />
        </div>
        <p id={css.color}>508 Bridle Avenue Newnan, GA 30263</p>
        <div className={css.two_state}>
            <img src={mobile} alt="" />
            <h3>Call us</h3>
        </div>
        <p id={css.color}>(319) 555-0115</p>
        <div className={css.three_state}>
            <img src={email} alt="" />
            <h3>Talk to us</h3>
        </div>
        <p id={css.color}>hello@example.com</p>
        <div className={css.four_state}>
            <img src={clock} alt="" />
            <h3>Working Hours</h3>
        </div>
        <p id={css.color}>Working Hours</p>
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
            <input id={css.input_first} type="text" placeholder="First name" />
            <input id={css.input_two} type="text" placeholder="Last name" />
          </div>
          <div className={css.email_text}>
            <input type="text " placeholder="Email" />
          </div>
          <div className={css.email_text}>
            <input type="text" placeholder="Number" />
          </div>
          <div className={css.text_input}>
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Website" />
          </div>
          <div className={css.page}>
            <h1>Your Budget</h1>
            <input type="range" />
          </div>
          <div className={css.massage}>
            <input type="text" placeholder="Massage" />
          </div>
          <div className={css.button}>
            <button>
              <h3>Send Request</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
