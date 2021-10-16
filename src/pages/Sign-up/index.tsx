import React from "react";
import { Link } from "react-router-dom";
import {Footer} from '../../components/Footer'
import { Container, Image, Wrapper, Form, Button } from "./styles";

const SignUp: React.FC = () => {
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
            <Link to="/" className="link">
              Assine
            </Link>
          </p>
          <h1>Teste</h1>

        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

export { SignUp };
