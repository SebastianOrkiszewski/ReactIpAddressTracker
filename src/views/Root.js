import React from "react";
import { useState, useEffect } from "react";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Root.styles";
import Search from "components/search/Search";
import Map from "components/map/Map";


const Root = () => {
  const [address, setAddress] = useState(null)
  const [ipAddress, setIpAddress] = useState("")
  

 
  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_6iBOizKz4PHvMjFzzsULl7fLIW9bk&ipAddress=8.8.8.8`
        )
        const data = await res.json()
        setAddress(data)
        console.log(data)
        
      }

      getData()
      console.log(address.location.region)
    } catch (error) {
      console.trace(error)
    }
  }, [])


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
  );
};

export default Root;
