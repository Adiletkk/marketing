import React from 'react';
import Slider from 'react-slick';
import cssModules from 'react-css-modules';
import 'slick-carousel';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import '../../styles/slick.less';
import styles from '../../styles/index.less';

const HomeSlider = () => (
	<div styleName="slider-holder">
		<div styleName="slider">   // <----- Main Style that I'm overriding but it does not work
			<Slider {...settings}>
				<div>
					<a href="#">