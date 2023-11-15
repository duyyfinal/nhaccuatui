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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
        );
      };
      const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;
    
        return (
          <div {...props} className="custom-nextArrow" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
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
        speed: 500,
        slidesToShow: 1,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />,
      };
      return <Slider ref={sliderRef} {...settings} className={cs("wrapper-slider")}>
        {
            linkImg.map((image)=>(
                
                <div className={cs('wrap-img')} key={image.id}>
                    <img className={cs('img-slide', 'image')} src={handleShowAddress(image.address)} alt={image.description}/>
                </div>
            ))
        }
        
        </Slider>
        
    
}

export default Carousel;