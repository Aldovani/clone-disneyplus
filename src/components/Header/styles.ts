import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 2.25rem;

  transition: all 0.5s ease 0s;
  &.visible {
    background: ${(props) => props.theme.colors.background};
  }
  @media(max-width: 750px){
    .blue{
      display: none;
    }
  }
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  .link{
    text-decoration: none;
    padding-top: .5rem;
  }

 
`;
export const Logo = styled.img`
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  opacity: 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;
