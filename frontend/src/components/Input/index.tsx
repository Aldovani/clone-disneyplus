import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { MyInput, Container } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
  onClick?: () => void;
}
const Input: React.FC<InputProps> = ({ icon: Icon, onClick, ...args }) => {
  return (
    <Container>

      <MyInput {...args} />
      {Icon && (
        <button type="button" className="icon" onClick={onClick}>
          <Icon size={24} color="#fff" />
        </button>
      )}
    </Container>
  );
};

export { Input };
