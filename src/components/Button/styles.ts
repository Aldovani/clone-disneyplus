import styled from "styled-components";

export const ContainerButton = styled.a`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: white;
  font-size: 1rem;
  font-family: ${(props) => props.theme.font};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1.5px;
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: #000;
  }

  &.blue {
    background: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};

    :hover {
      color: white;
      background-color: #0063e5;
    }
  }
  &.hide{
    opacity: 0;
    visibility: hidden;

  }
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  &.md{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    min-width: 245px;
    font-size: 18px;
  }
  &.full{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    font-size: 18px;
  }
`;
