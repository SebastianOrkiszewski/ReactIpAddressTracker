import React from 'react'
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Root.styles";
import Search from 'components/search/Search';
import Map from 'components/map/Map';

const Root = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Search />
        <Map />
      </Wrapper>
    </ThemeProvider>
  </>
  )
}

export default Root