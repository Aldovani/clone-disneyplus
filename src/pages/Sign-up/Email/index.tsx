import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Container, Image, Wrapper, Form, Button } from "./styles";

const Email: React.FC = () => {
  return (
    <>
      <Container>
        <Link className="link" to="/login">Entrar</Link>
        <Wrapper>
          <Image
            src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
            alt="Logo Disney+"
          />
          <div>
            <p>Passo 1 de 2</p>
            <h2>Digite seu email</h2>
          </div>
          <Form>
            <Input type="email" placeholder="Email" required />
            <Button>Continuar</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export { Email };
