import styles from './Carousel.module.scss'
import classNames from 'classnames/bind';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import images from '../../../../assets/images';

const cs = classNames.bind(styles)

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return <Slider {...settings} className={cs("wrapper-slider")}>
        <div>
        <img src={images.slide01} alt='slide'/>
        </div>
        <div>
        <img src={images.slide01} alt='slide'/>
        </div>
        <div>
        <img src={images.slide01} alt='slide'/>
        </div>
        <div>
        <img src={images.slide01} alt='slide'/>
        </div>
    </Slider>
}

export default Carousel;