import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Container, Image, Wrapper, Form, Button } from "./styles";

const SingUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [input, setInput] = useState({
    type: "password",
    icon: AiFillEyeInvisible,
  });
  const handleIcon = () => {
    input.type === "password"
      ? setInput({
          type: "text",
          icon: AiFillEye,
        })
      : setInput({
          type: "password",
          icon: AiFillEyeInvisible,
        });
  };

  async function handleCreateUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.post("/sing-up", {
      email,
      password,
    }); 

    console.log(response);
    if(response.data.error){
      console.log(response.data.error)
    }

  }
  return (
    <>
      <Container>
        <Link className="link" to="/login">
          Entrar
        </Link>
        <Wrapper>
          <Image
            src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
            alt="Logo Disney+"
          />

          <h2>Crie sua conta</h2>

          <Form
            onSubmit={handleCreateUser}
          >
            <Input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Input
              placeholder="senha"
              icon={input.icon}
              type={input.type}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              onClick={handleIcon}
            />
            <span>
              Use no mínimo seis caracteres (com distinção entre maiúsculas e
              minúsculas) com pelo menos um número ou caractere especial.
            </span>

            <Button type="submit">Criar</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export { SingUp };
