import React, { InputHTMLAttributes } from "react";

import { MyInput } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}
const Input: React.FC<InputProps> = ({children}, rest) => {
  return (
    <>
      <MyInput {...rest} />

      {children}
    </>
  );
};

export { Input };
