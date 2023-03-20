import React from "react";
import css from "./Benefitsachieved.module.css";
import image from "../../foto/exchange.png";

function Benefitsachieved() {
  return (
    <div className={css.wrapper}>
      <div className={css.top}>
        <h1 id={css.top_h1}>Benefits Achieved</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
          
        </p>
      </div>
      <div className={css.bottom}>
        <div className={css.leftstate}>
        <div className={css.left}>
          <div></div>
          <h1 id={css.fonts}>Online Media Management</h1>
          <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
        </div>
        <div className={css.left2}>
          <div></div>
          <h1 id={css.fonts}>Online Media Management</h1>
          <p>Suspendisse enim turpis</p>
        </div>
        <div className={css.left3}>
          <div></div>
          <h1 id={css.fonts}>Online Media Management</h1>
          <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
        </div>
        </div>
        <div className={css.center}>
          <img src={image} alt="foto" />
        </div>
        <div className={css.rightstate}>
        <div className={css.right}>
        <div></div>
            <h1 id={css.fonts}>Online Media Management</h1>
            <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
        </div>
        <div className={css.right2}>
        <div className={css.btn}></div>
            <h1 id={css.fonts}>Online Media Management</h1>
            <p>Suspendisse enim turpis</p>
        </div>
        <div className={css.right3}>
        <div></div>
            <h1 id={css.fonts}>Online Media Management</h1>
            <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Benefitsachieved;
