import { useState, useEffect, useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import './Carousel.css';

import images from '../../../../assets/images';

const cs = classNames.bind(styles)

function Carousel() {
    const [linkImg, setLinkImg] =useState([])
    const currentAddress = useRef('')
    const sliderRef = useRef();

    useEffect(()=>{


        fetch("http://localhost:3001/Slide")
            .then(res => res.json())
            .then(linkImg => {
                setLinkImg(linkImg)
            })  
        
    },[])
    const handleShowAddress = (address) =>{
        currentAddress.current = address
        return images[address]
    }

    const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;
    
        return (
          <div {...props} className="custom-prevArrow" onClick={onClick}>
            <div className="wrap-btn">
              <img src={images.prevSlide} alt="Prev Button"/>
            </div>
          </div>
        );
      };
      const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;
    
        return (
          <div {...props} className="custom-nextArrow" onClick={onClick}>
            <div className="wrap-btn">
              <img src={images.nextSlide} alt="Next Button"/>
            </div>
          </div>
        );
      };

    const settings = {
        className: 'center',
        autoplay: true,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: '160px',
        focusOnSelect: true,
        speed: 1000,
        slidesToShow: 1,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />,
      };
      return <Slider ref={sliderRef} {...settings}>
        {
            linkImg.map((image)=>(
                
                <div key={image.id}>
                    <img className={cs('img-slide', 'image')} src={handleShowAddress(image.address)} alt={image.description}/>
                </div>
                
            ))
        }
        
        </Slider>
        
    
}

export default Carousel;