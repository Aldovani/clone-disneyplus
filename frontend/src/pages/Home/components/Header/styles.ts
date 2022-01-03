import styled from "styled-components";

export const Container = styled.header`
position: fixed;
z-index: 5;
right: 0;
top: 0;

height: 72px;
width: 100%;
padding:1.5rem calc(3.5vw + 15px);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
&.visible{
  background: #090b13;
}
  img {
    width: 80px;
    height: auto;
  }
  ul {
    list-style: none;
    /* padding: 0 39px; */
    display: flex;
    align-items: center;

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

  @media (max-width: 800px) {
    span{
      display: none;
    }
  }
`;
