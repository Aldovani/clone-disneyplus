import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo } from "./styles";

export const Logos: React.FC = () => {
  const LogosArray = [
    {
      id: 1,
      name: "Disney",
      logo: "/assets/images/viewers-disney.png",
      video: "/assets/videos/disney.mp4",
    },
    {
      id: 2,
      name: "Marvel",
      logo: "/assets/images/viewers-marvel.png",
      video: "/assets/videos/marvel.mp4",
    },
    {
      id: 3,
      name: "pixar",
      logo: "/assets/images/viewers-pixar.png",
      video: "/assets/videos/pixar.mp4",
    },
    {
      id: 4,
      name: "starwars",
      logo: "/assets/images/viewers-starwars.png",
      video: "/assets/videos/star-wars.mp4",
    },
    {
      id: 5,
      name: "national",
      logo: "/assets/images/viewers-national.png",
      video: "/assets/videos/national-geographic.mp4",
    },
    {
      id: 6,
      name: "star",
      logo: "/assets/images/viewers-star.png",
      video: "/assets/videos/star.mp4",
    },
  ];
  return (
    <Container>
      {LogosArray.map((logo) => {
        return (
          <Logo>
            <Link to="/home" key={logo.id}>
              <img src={logo.logo} alt={`Logo ${logo.name}`} />

              <video autoPlay muted loop>
                <source src={logo.video} type="video/mp4" />
              </video>
            </Link>
          </Logo>
        );
      })}
    </Container>
  );
};

