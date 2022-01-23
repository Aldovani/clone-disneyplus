import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Container, Image, Wrapper, Form, Button, Error } from "./styles";
import { AuthContext } from "../../context/AuthContext";

type RegisterResponse = {
  email?: string;
  userName?: string;
  password?: string;
};

const SingUp: React.FC = () => {
  const { registerUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [errorResponse, setErrorResponse] = useState<RegisterResponse>();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await registerUser(email, password, userName);
    console.log("aqui");
    result ? setErrorResponse(result.errors) : setErrorResponse(undefined);
    console.log(errorResponse);
  };

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

          <Form onSubmit={handleRegister}>
            <Input
              placeholder="Nome"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              id="username"
              className={errorResponse?.userName ? "error" : ""}
            />
               {errorResponse?.userName && (
              <Error>{errorResponse?.userName}</Error>
            )}
            <Input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              className={errorResponse?.email ? "error" : ""}
              inputMode="email"
            />
               {errorResponse?.email && (
              <Error>{errorResponse?.email}</Error>
            )}
            {passwordShow ? (
              <Input
                placeholder="senha"
                id="senha"
                icon={AiFillEye}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onClick={() => setPasswordShow(false)}
                className={errorResponse?.password ? "error" : ""}
              />
            ) : (
              <Input
                placeholder="senha"
                id="senha"
                icon={AiFillEyeInvisible}
                type="text"
                className={errorResponse?.password ? "error" : ""}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onClick={() => setPasswordShow(true)}
              />
            )}
            {errorResponse?.password && (
              <Error>{errorResponse?.password}</Error>
            )}
            <Button type="submit">Criar</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export { SingUp };
