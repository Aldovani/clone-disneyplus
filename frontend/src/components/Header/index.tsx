import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import { Container, Logo, Navigation } from "./styles";

const Header: React.FC = () => {
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
      <Logo
        className={visible}
        src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
      />
      <Navigation>
        <Button  href="/sing-up"  className={`blue  ${visible}`}>
          Assine Agora
        </Button>
        <Link component={Button} to="/login" className="link">
          Entrar
        </Link>
      </Navigation>
    </Container>
  );
};

export { Header };
