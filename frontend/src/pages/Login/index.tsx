import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Footer} from '../../components/Footer'
import { Input } from "../../components/Input";
import { Container, Image, Wrapper, Form, Button } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { api } from "../../services/api";

const Login: React.FC = () => {

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

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.post("/login", {
      email,
      password:password.trim(),
    });

    console.log(response.data);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Image
            src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
            alt="Logo Disney+"
          />
          <h2>Login</h2>
          <Form
            onSubmit={handleLogin}
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
         

            <Button type="submit">Entra</Button>
          </Form>
          <p>
            Não tem Disney+?{" "}
            <Link to="/sing-up/email" className="link">
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
