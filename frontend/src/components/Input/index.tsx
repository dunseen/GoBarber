import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputPros> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
