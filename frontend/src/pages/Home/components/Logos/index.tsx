import React from "react";
import {Link} from 'react-router-dom'
import { Container, Logo } from "./styles";

export const Logos: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Link to="/home">
          <img src="/assets/images/viewers-disney.png" alt="Logo Disney" />

          <video autoPlay muted loop>
            <source src="assets/videos/disney.mp4" type="video/mp4" />
          </video>
        </Link>
      </Logo>
      <Logo>
        <Link to="/home">
          <img src="/assets/images/viewers-pixar.png" alt="Logo Pixar" />
          <video autoPlay muted loop>
            <source src="assets/videos/pixar.mp4" type="video/mp4" />
          </video>
        </Link>
      </Logo>
      <Logo>
        <Link to="/home" >
      
          <img src="/assets/images/viewers-marvel.png" alt="Logo marvel" />
          <video autoPlay muted loop>
            <source src="assets/videos/marvel.mp4" type="video/mp4" />
          </video>
       
        </Link>
      </Logo>
      <Logo>
        <Link to="/home">
          <img src="/assets/images/viewers-starwars.png" alt="Logo StarWars" />
          <video autoPlay muted loop>
            <source src="assets/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </Link>
      </Logo>
      <Logo>
        <Link to="/home">
          <img
            src="/assets/images/viewers-national.png"
            alt="Logo National Geographic"
          />
          <video autoPlay muted loop>
            <source
              src="assets/videos/national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </Link>
      </Logo>
      <Logo>
        <Link to="/home">
          <img src="/assets/images/viewers-star.png" alt="Logo Star" />
          <video autoPlay muted loop>
            <source src="assets/videos/star.mp4" type="video/mp4" />
          </video>
        </Link>
      </Logo>
    </Container>
  );
};

