import styled from "styled-components";

export const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-image: url("/bannerLarge.jpg");
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  
  
  @media(max-width:1025px){
    background-size: cover;
  background-image: url("/bannerMedium.jpg");

}
  @media(max-width:825px){
    background-size: contain;
  background-image: url("/bannerMedium.jpg");

}
`;
