import styled from "styled-components";

export const Container = styled.main`
  background: rgb(26, 29, 41);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f9f9f9;
  position: relative;

  .link {
    position: absolute;
    right: 1.5rem;
    top: 4rem;
    color: #fff;
    text-decoration: none;
    color: #c0c0c0;
    font-weight: 900;
    transition: 0.3s;
    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
export const Wrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: rgb(26, 29, 41);
  min-width: 355px;
  gap: 2rem;

  p {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    color: #cacaca;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    min-width: 100%;
    padding-top: 3rem;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  width: 100%;
`;
export const Image = styled.img`
  width: 160px;
  height: auto;
  align-self: center;
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  color: #f9f9f9;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  height: 48px;
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
`;
