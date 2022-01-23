import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Container, Wrap, LogoBanner } from "./styles";
import { Link } from "react-router-dom";

const CarrouselBanner: React.FC = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const imagesBanners = [
    "what-if",
    "american-dad",
    "black-widow",
    "family-guy",
    "simpsons",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    beforeChange: (current: React.SetStateAction<number>) =>
      setCurrentSlider(current),

    afterChange: (current: React.SetStateAction<number>) =>
      setCurrentSlider(current),

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Carousel {...settings}>
        {imagesBanners.map((image, index) => {
          return (
            <Wrap key={image} image={image}>
              <Link to={`/home`}>
                <div />
                <LogoBanner
                  id={image}
                  src={`assets/images/slider-${image}-logo.png`}
                  className={currentSlider === index ? "active" : ""}
                  alt={`Logo ${image}`}
                  title={`Logo ${image}`}
                />
              </Link>
            </Wrap>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default CarrouselBanner;
