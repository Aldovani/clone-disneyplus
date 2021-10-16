import React from "react";
import { Link } from "react-router-dom";
import {Footer} from '../../components/Footer'
import { Container, Image, Wrapper, Form, Button } from "./styles";

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Image
            src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
            alt="Logo Disney+"
          />
          <h2>Use o seu e-mail para entrar</h2>
          <Form>
            <input type="email" placeholder="E-mail" autoComplete="" />
            <Button>Continuar</Button>
          </Form>
          <p>
            Não tem Disney+?{" "}
            <Link to="/sing-up" className="link">
              Assine
            </Link>
          </p>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

export { Login };
