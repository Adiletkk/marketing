import Comm1 from "../images/comm1.svg";
import Comm2 from "../images/comm2.svg";
import Comm3 from "../images/comm3.svg";
import styles from "./Posts.module.css";
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

const Posts = () => {
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: `${styles.dots}`,
    className: `${styles.center}`,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 60,
    centerMargin: 60,
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
      <div>
        <h1>Latest Posts</h1>
      </div>
      <div className={styles.content}>
        <Slider {...settings}>

          <div>
            <div className={styles.card1}>
              <div>
                <span className={styles.subTitle}>
                  04 JUL 2021 <span className={styles.dot}>&#183;</span> 8 min
                  read
                </span>
                <h2 className={styles.comment1}>
                  How to design a product that can grow itself 10x in year:
                </h2>
              </div>
              <div className={styles.proff}>
                <img src={Comm2} alt="" />
                <span>Cruz Truong</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div>
                <span className={styles.subTitle}>
                  15 DEC 2020 <span className={styles.dot}>&#183;</span> 8 min
                  read
                </span>
                <h2 className={styles.comment}>
                  Any mechanical keyboard enthusiasts in design?
                </h2>
              </div>
              <div className={styles.proff}>
                <img src={Comm3} alt="" />
                <span>Margaret Donnelly</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div>
                <span className={styles.subTitle}>
                  15 DEC 2020 <span className={styles.dot}>&#183;</span> 8 min
                  read
                </span>
                <h2 className={styles.comment}>
                  Any mechanical keyboard enthusiasts in design?
                </h2>
              </div>
              <div className={styles.proff}>
                <img src={Comm1} alt="" />
                <span>Margaret Donnelly</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div>
                <span className={styles.subTitle}>
                  15 DEC 2020 <span className={styles.dot}>&#183;</span> 8 min
                  read
                </span>
                <h2 className={styles.comment}>
                  Any mechanical keyboard enthusiasts in design?
                </h2>
              </div>
              <div className={styles.proff}>
                <img src={Comm3} alt="" />
                <span>Margaret Donnelly</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Posts;
