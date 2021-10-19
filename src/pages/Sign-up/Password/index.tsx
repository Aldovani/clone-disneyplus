import React from "react";
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Container, Image, Wrapper, Form, Button } from "./styles";

const Password: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Image
            src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
            alt="Logo Disney+"
          />
          <div>
            <p>Passo 2 de 2</p>
            <h2>Crie uma senha</h2>
          </div>
          <Form>
            <Input type="password" placeholder="senha" required >
              <img src="/hide.png" alt="asa" />
            </Input>
            <p>
            Voce vai usar esse email para entrar:
            <br />
            AldovaniHcosta@gmail.com
          </p>
            <Button>Continuar</Button>
          </Form>

          
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export { Password };
