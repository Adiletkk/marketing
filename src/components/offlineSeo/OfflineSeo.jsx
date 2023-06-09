import React from "react";
import styles from "./OfflineSeo.module.css";
import Header from "../../Pages/HeaderPage/Header";
import mail from "../images/seo_mail.svg";
import url from "../images/seo_list.svg";

const OfflineSeo = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.main_content}>
        <div className={styles.content_title}>
          <h1 className={styles.title}>Offline Seo</h1>
          <p className={styles.text}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.{" "}
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <img src={mail} alt="" />
            <input className={styles.info} type="text" placeholder="Email" />
          </div>

          <div className={styles.content_left}>
            <div className={styles.content_elem}></div>
            <img src={url} alt="" />
            <input
              className={styles.info}
              type="text"
              placeholder="Website URL"
            />
          </div>
          <button className={styles.info_btn}>Analyse</button>
        </div>
        <div className={styles.mob_content}>
          <input className={styles.info} type="text" placeholder="Email" />
          <input
            className={styles.info}
            type="text"
            placeholder="Website URL"
          />
          <button className={styles.info_btn}>Analyse</button>
        </div>
      </div>
    </div>
  );
};

export default OfflineSeo;
