import React,{InputHTMLAttributes} from "react";
import { useHistory } from "react-router-dom";

import { ContainerButton } from "./styles";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
  inPage?: string;
}
const Button: React.FC<ButtonProps> = ({ href, className, children,inPage }) => {
  const history = useHistory();
  return (
    <ContainerButton
      onClick={() => history.push(href)}
      className={className}
      href={inPage}
    >
      {children}
    </ContainerButton>
  );
};

export { Button };
