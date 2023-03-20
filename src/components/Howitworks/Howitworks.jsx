import React from "react";
import css from "./Howitworks.module.css";

function Howitworks() {
  return (
    <div className={css.wrapper}>
      <div className={css.top}>
        <h1>How It Works</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>
      <div className={css.bottom}>
        <div className={css.content_first}>
          <h5>Planning</h5>
          <p>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
        </div>
        <div className={css.content_two}>
          <h5>Research</h5>
          <p>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
        </div>
        <div className={css.content_three}>
          <h5>Research</h5>
          <p>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
        </div>
        <div className={css.content_four}>
          <h5>Research</h5>
          <p>Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.</p>
        </div>
    </div>
    </div>
  );
}

export default Howitworks;
