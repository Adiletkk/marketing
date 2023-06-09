import styles from "./DevComments.module.css";
import Robert from "../images/robert.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from "../images/arr_right.svg";
import left from "../images/arr_left.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={right} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      {" "}
      <img src={left} alt="" />{" "}
    </div>
  );
}

const DevCommentsBlock = () => {
  const settings = {
    
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `${styles.dots}`,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className={styles.main}>
      <div className={styles.main_content}>
		<div className={styles.header}>
              <span className={styles.subTitle}>Testimonials</span>
              <h1 className={styles.title}>Who Love Our Work</h1>
            </div>

        <Slider {...settings}>
          <div className={styles.main_card}>
            
            <div className={styles.info}>
              <span className={styles.text}>
                Amazing experience i love it a lot. Thanks to the team <br />{" "}
                that dreams come true, great! I appreciate there
                <br /> attitude and approach.
              </span>
              <div>
                <img src={Robert} alt="" />
                <p className={styles.name}>Robert Fox</p>
                <p className={styles.proff}>Designer</p>
              </div>
            </div>
          </div>

          <div className={styles.main_card}>

            <div className={styles.info}>
              <span className={styles.text}>
                Amazing experience i love it a lot. Thanks to the team <br />{" "}
                that dreams come true, great! I appreciate there
                <br /> attitude and approach.
              </span>
              <div>
                <img src={Robert} alt="" />
                <p className={styles.name}>Robert Fox</p>
                <p className={styles.proff}>Designer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default DevCommentsBlock;
