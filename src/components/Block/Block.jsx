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
        <p>About Us</p>
        <h1>Who We Are</h1>
        <p>
          In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. In dui magna, posuere eget,
          vestibulum et, tempor auctor, justo. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <button className={css.btn}>
          Learn more
          <img src={strelka} alt="" />
        </button>
      </div>
      <div className={css.right}>
       <div className={css.firstwrapper}>
        <img src={first} alt="" />
        <p className={css.small}>PROJECTS</p>
        <img src={two} alt="" />
        <p className={css.small}> Happy CLIENTS</p>
        <img src={three} alt="" />
        <p className={css.small}>YEARS OF EXPERIENCE</p>
         </div>
         <div className={css.secondwrapper}>
          <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
          <p>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
          <p>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
         </div>
      </div>
    </div>
  );
}

export default Block;
