import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Container } from "./styles";

const ButtonBottom: React.FC = () => {
  const [visible, setVisible] = useState("hide");
  const scrollMove = () => {
    const scrollToTop = document.documentElement.scrollTop;
    if (scrollToTop > 500) setVisible("visible");
    else setVisible("hide");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollMove);
    return () => window.removeEventListener("scroll", scrollMove);
  }, []);
  return (
    <Container className={visible}>
      <Button href="#Assinatura" myClass={`blue sm`}>Assine Agora</Button>
    </Container>
  );
};

export default ButtonBottom;
