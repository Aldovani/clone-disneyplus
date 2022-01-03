import styled from "styled-components";

export const Container = styled.div`
  background: rgb(26, 29, 41);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f9f9f9;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
export const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: rgb(26, 29, 41);
  min-width: 355px;
  gap: 2rem;
  p {
    color: #7d7e83;
    .link {
      color: #f9f9f9;
      text-decoration: none;
    }
  }

  @media (max-width: 500px) {
    min-width: 100%;
    padding-top: 3rem;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  width: 100%;
  max-width: 450px;
  
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
