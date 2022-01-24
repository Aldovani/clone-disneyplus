import styled from "styled-components";
import Slider from "react-slick";

interface WrapType {
  image: string;
}

export const Container = styled.div`
    margin: 15px 0 10px ;
  h4 {
    font-size: 1.5rem;
    padding: 10px;
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
    bottom: 20px;
    display: block;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 25px;
    text-align: right;
    pointer-events: none;
    width: 100%;
  }
  .slick-dots li {
    margin: 0;
  }
`;

export const Wrap = styled.div<WrapType>`
  a {
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
    div {
      height: 0;
      width: 100%;
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
      padding-top: 56.25%;
      border-radius: 4px;
      display: block;
      z-index: -1;
      background-image: url(${(props) => `assets/images/${props.image}.jpg`})
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      transition-duration: 300ms;
      transition-property: transform, box-shadow, outline;
      transition-timing-function: ease-out;
      outline: 4px solid rgba(249, 249, 249, 0.8);
      outline-offset: -4px;
    }
  }
`;
