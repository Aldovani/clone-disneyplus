import React from "react";

import { ContainerButton } from "./styles";

type ButtonProps = {
  myClass?: string;
  href?: string;
};
const Button: React.FC<ButtonProps> = ({ href, myClass, children }) => {
  return (
    <ContainerButton 
      href={href}
      className={myClass}
    >
      {children}
    </ContainerButton>
  );
};

export { Button };
