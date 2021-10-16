import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 88px;
  bottom: -100px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(0,0,0,.8);
  transition: all 1s;
  
  @media(max-width:750px){

    &.visible{
      opacity: 1;
      visibility: visible;
      bottom: 0;
    }
  }
 
`;
