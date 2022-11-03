import React from 'react'
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Root.styles";

const Root = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <div>Root</div>
      </Wrapper>
    </ThemeProvider>
  </>
  )
}

export default Root