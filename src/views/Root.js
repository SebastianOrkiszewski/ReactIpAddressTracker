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
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=192.212.173.101`
        )
        const data = await res.json()
        setAddress(data)
        console.log(data)
        
      }

      getData()
      
    } catch (error) {
      console.trace(error)
    }
  }, [])

 

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          
          {address && <>
            <Search address={address} />
            <Map address={address} />
            </>}
          
          
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Root;
