import React from "react";
import css from "./Howitworks.module.css";

function Howitworks() {
  return (
    <div className={css.wrapper}>
      <div className={css.top}>
        <h1 className={css.top_title}>How It Works</h1>
        <p className={css.top_text}>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>

      <div className={css.bottom}>
        <section className={css.bot_right}>
          <div className={css.content_info1}>
            <span className={css.content_subtitle}>step 1</span>
            <h5>Planning</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>

          <div className={css.content_info3}>
            <span className={css.content_subtitle}>step 3</span>
            <h5>Research</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </section>

        <section className={css.bot_left}>
          <div className={css.content_info2}>
            <span className={css.content_subtitle}>step 2</span>
            <h5>Optimizing</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={css.content_info4}>
            <span className={css.content_subtitle}>step 4</span>
            <h5>Results</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </section>
      </div>

      <div className={css.mob_bot}>
        <div className={css.border}>
          <div className={css.content_info1}>
            <span className={css.content_subtitle}>step 1</span>
            <h5>Planning</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>

          <div className={css.content_infow}>
            <span className={css.content_subtitle}>step 2</span>
            <h5>Research</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>

          <div className={css.content_info3}>
            <span className={css.content_subtitle}>step 3</span>
            <h5>Optimizing</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>

          <div className={css.content_info3w}>
            <span className={css.content_subtitle}>step 4</span>
            <h5>Resuslts</h5>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
