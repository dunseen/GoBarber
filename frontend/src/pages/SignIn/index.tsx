import React from "react";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
// import backgroundImg from "../../assets/sign-in-background.png";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Logon</h1>

        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />

        <button type="submit">Entrar</button>

        <a href="teste">Esqueci minha senha</a>
      </form>

      <a href="create">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
