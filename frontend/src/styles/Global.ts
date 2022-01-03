import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body{
  -webkit-font-smoothing: antialiased !important;
  background: ${(props) => props.theme.colors.background};
  font-family: ${props => props.theme.font};

}
`;
