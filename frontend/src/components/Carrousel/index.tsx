import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Container, Wrap } from "./styles";
import { Link } from "react-router-dom";

interface CarrouselProps {
  category: string;
  images: string[];
}

export function Carrousel({ category, images }: CarrouselProps) {
  

  return (
    <Container>
      <h4>{category}</h4>
      <Carousel {...settings}>
        {images.map((image, index) => (
          <Wrap key={index} image={image}>
            <Link to={`/home`}>
              <div title={ image}/>
            </Link>
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};
