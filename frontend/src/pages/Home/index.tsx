import React from "react";

import { Carrousel } from "../../components/Carrousel";
import { Logos } from "./components/Logos/index";
import { Header } from "./components/Header/index";
import {Originals,Lançamentos,Recomendado,Populares,Marvel} from '../../utils/arrayCarrousel'
import { Main, Container } from "./styles";
import CarrouselBanner from "../../components/CarrouselBanner";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <CarrouselBanner />

          <Logos />
          <Carrousel category="Recomendado" images={Recomendado} />
          <Carrousel category="Lançamentos" images={Lançamentos }/>
          <Carrousel category="Originals" images={Originals} />
          <Carrousel category="Populares"  images={Populares} />
          <Carrousel category="Marvel"  images={Marvel} />
          
        </Main>
      </Container>
    </>
  );
};

export { Home };
