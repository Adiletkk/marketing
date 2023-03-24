import React from "react";
import css from "./Block.module.css";
import first from "../../foto/first.png";
import two from "../../foto/two.png";
import three from "../../foto/three.png";
import strelka from "../../foto/strelka.png";

function Block() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <b>About Us</b>
        <h1>Who We Are</h1>
        <p>
          In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. In dui magna, posuere eget,
          vestibulum et, tempor auctor, justo. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <button className={css.wrap_btn}>
          Lean more <img src={strelka} alt="" />
        </button>
      </div>
      <div className={css.right}>
        <div className={css.firstWrapper}>
          <div>
            <img src={first} alt="" />
            <p>PROJECTS</p>
          </div>
          <b>
            Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
          </b>
        </div>
        <div className={css.firstWrapper}>
          <div>
            <img src={two} alt="" />
            <p>Happy CLIENTS</p>
          </div>
          <b>
            Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
          </b>
        </div>
        <div className={css.firstWrapper}>
          <div>
            <img src={three} alt="" />
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <b>
            Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
          </b>
        </div>
      </div>
    </div>
  );
}

export default Block;
