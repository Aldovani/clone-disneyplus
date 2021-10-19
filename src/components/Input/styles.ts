import styled from "styled-components";

export const MyInput = styled.input`
  border-radius: 4px;
  background: #31343e;
  border: 0;
  height: 48px;
  width: 100%;
  color: #f9f9f9;
  caret-color: rgb(2, 231, 245);
  outline: none;

  padding: 0.75rem;
  &::placeholder {
    color: #96989c;
  }
  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.3);
  }
`;
