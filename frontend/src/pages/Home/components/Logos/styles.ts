import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  align-items: center;
  justify-content: space-evenly;
  gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Logo = styled.div`
  padding: 30%;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
        
    video {
      opacity: 1;
    }
  }

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  video {
    position: absolute;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;

    border-radius: 5px;
  }

`;
