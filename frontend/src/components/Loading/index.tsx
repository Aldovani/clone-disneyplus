import React from "react";

import { Container,Spiner } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>

    <Spiner className="lds-ring ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spiner>
    </Container>
  );
};

export default Loading;
