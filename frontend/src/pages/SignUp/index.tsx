import React from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="nome" icon={FiUser} placeholder="nome" />
        <Input name="e-mail" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button>Cadastrar</Button>
      </form>

      <a href="create">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
