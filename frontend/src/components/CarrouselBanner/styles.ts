import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  padding: 6rem 0 3rem;
  h4 {
    padding: 10px 10px 0 10px;
    margin: 15px 0 10px 0;
    color: #fff;
  }
`;

export const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      opacity: 1;
      color: rgb(150, 158, 171);
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  li.slick-active button:before {
    color: white;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -5%;
  }
  .slick-next {
    right: -5%;
  }
  .slick-dots {
    bottom: 10px;
    display: block;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 20px;
    text-align: right;
    pointer-events: none;
    width: 100%;
  }
  .slick-dots li {
    margin: 0;
  }
`;

export const Wrap = styled.div<{ image?: string }>`
  a {
    position: relative;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 4px;
    overflow: hidden;
    transition-duration: 300ms;
    transition-property: transform, box-shadow, outline;
    transition-timing-function: ease-out;
    outline: 4px solid rgba(249, 249, 249, 0);
    outline-offset: -4px;
    height: 270px;

    div {
      height: 100%;
      width: 100%;
      background-position: right center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 4px;
      display: block;
      z-index: -1;

      background-image: ${(props) =>
        `url(assets/images/slider-${props.image}.jfif)`};

      @media (max-width: 700px) {
        background-position:  50%  -50%; 
      
      }
     
    }

    &:hover {
      transition-duration: 300ms;
      transition-property: transform, outline;
      transition-timing-function: ease-out;
      outline: 4px solid rgba(249, 249, 249, 0.8);
      outline-offset: -4px;
    }
  }
`;

export const LogoBanner = styled.img`
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  inset: 0 25px;
  height: 100%;

  &.active {
    opacity: 1;

    left: 0;
  }

  &#black-widow,
  &#what-if {
    padding: 5%;
  }
  @media (max-width: 700px) {
    height: auto;
    width: 150%;

    &#black-widow,
    &#what-if {
      width: 50%;
    }
  }
`;
