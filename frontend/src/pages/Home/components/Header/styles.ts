import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  width: 100%;
  padding: 1.5rem calc(3.5vw + 15px);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.visible {
    background: #090b13;
  }
  img {
    width: 80px;
    height: auto;
  }
  ul {
    list-style: none;
    display: flex;

    gap: 30px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;

    gap: 10px;
    padding-bottom: 5px;
  }
  span {
    position: relative;
    &::after {
      transition: all 0.75s;

      position: absolute;
      content: "";
      width: 0;
      height: 2px;
      left: 0;
      bottom: 0;
      background: #fff;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    span {
      display: none;
    }
  }
  @media (max-width: 600px) {
    ul {
      display: none;
    }
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ContainerMenuUser = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .options {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 0;
    width: 100px;
    transition: all 0.5s;
    transform: translateY(150%);
    &.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(100%);
    }
  }

  button {
    padding: 0.25rem;
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    border: 0;
    width: 100%;
    cursor: pointer;
    border-radius: 8px;
  }
`;

export const MenuUser = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  transition: all 250ms;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  position: relative;
`;
