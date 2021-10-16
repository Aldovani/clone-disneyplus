import styled from "styled-components";

export const Container = styled.div`
  background: rgb(26, 29, 41);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f9f9f9;
`;
export const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: rgb(26, 29, 41);
  height: 100vh;
  min-width: 355px;
  gap: 2rem;
  p{
    color: #7d7e83;
    .link{
      color:#f9f9f9;
      text-decoration: none;
    }
  }

  `;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  
  width: 100%;
  input {
    border-radius: 4px;
    background: #31343e;
    border: 0;
    height: 48px;
    width: 100%;
    color: #f9f9f9;
    caret-color: rgb(2,231, 245);
    outline: none;
    
    padding: 0.75rem;
    &::placeholder{
      
      color: #96989c;
    }
    &:focus{
    border:1px solid rgba(249, 249, 249, 0.3);

  }
  
  }

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


