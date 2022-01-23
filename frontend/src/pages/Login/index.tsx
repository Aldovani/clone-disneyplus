import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Container, Image, Wrapper, Form, Button, Error } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await login(email, password);
    result ? setError(result) : setError("");
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
          <Form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              className={error ? "error" : ""}
            />
            {passwordShow ? (
              <Input
                className={error ? "error" : ""}
                placeholder="senha"
                icon={AiFillEye}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onClick={() => setPasswordShow(false)}
              />
            ) : (
              <Input
                placeholder="senha"
                icon={AiFillEyeInvisible}
                type="text"
                value={password}
                className={error ? "error" : ""}
                onChange={(event) => setPassword(event.target.value)}
                onClick={() => setPasswordShow(true)}
              />
            )}

            {error && <Error>{error}</Error>}

            <Button type="submit">Entra</Button>
            <p>
              Não tem Disney+?{" "}
              <Link to="/sing-up" className="link">
                Assine
              </Link>
            </p>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export { Login };
