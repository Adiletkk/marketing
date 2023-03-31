import React, { useRef } from "react";
import css from "./Projectbrief.module.css";
import image from "../../foto/photoshop.png";
import faceboock from "../../foto/facebook2.png";
import instagram from "../../foto/instagram2.png";
import ins from "../../foto/ins.png";
import twitter from "../../foto/twitter2.png";
import { DataImgPagination } from "../../Contstants/PaginationData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../Pages/HeaderPage/Header";


function Projectbrief() {
  const arrowRef = useRef(null)
  const settings = {
    className:`${css.slide_box}`,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <div className={css.wrapper}>
      <Header/>
      <img src={image} alt="" />
      <div className={css.wrappermain}>
        <div className={css.left}>
          <div className={css.text_first}>
            <h1>Project Brief</h1>
            <p>
              Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
              libero. Pellentesque auctor neque nec urna. Sed fringilla mauris
              sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.
            </p>
          </div>
          <div className={css.text_two}>
            <h1>How We Work</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ul>
              <li>Medical Assistant</li>
              <li>Web Designer</li>
              <li>Dog Trainer</li>
              <li>Nursing Assistant</li>
              <li>President of Sales</li>
            </ul>
          </div>
          <div className={css.text_three}>
            <h1>Results</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <li>Medical Assistant</li>
            <li>Web Designer</li>
            <li>Dog Trainer</li>
            <li>Nursing Assistant</li>
            <li>President of Sales</li>
          </div>
          <div className={css.images}>
        <div className={css.slide_head}>
              <h1>Gallery</h1>
              <div className={css.slide_btn}>
                <button
                  onClick={() => arrowRef.current.slickPrev()}
                >&#8592;</button>
                <button
                  onClick={() => arrowRef.current.slickNext()}
                >&#8594;</button>
              </div>
        </div>
            <div >
              <Slider ref={arrowRef} {...settings}>
                {DataImgPagination.map((item) => (
                  <div className={css.card} key={item.id} >
                    <img className={css.card_img} src={item.img} alt="" />
                  </div>
                ))
                }
              </Slider>
            </div>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.ikon}>
            <p id={css.text_color}>summary</p>
            <h1>Bank of America</h1>
            <p>
              Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit
              amet augue.
            </p>
            <p id={css.text_color}> Website</p>
            <p>example.com</p>
            <p id={css.text_color}>Category</p>
            <p>SEO Optimization</p>
            <p id={css.text_color}>Date</p>
            <p>October 25, 2019</p>
          </div>
          <div className={css.end_img}>
            <p>Share:</p>
            <img src={faceboock} alt="" />
            <img src={instagram} alt="" />
            <img src={ins} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectbrief;
