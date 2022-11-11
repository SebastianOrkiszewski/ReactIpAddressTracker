import React from "react";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Root.styles";
import { useState, useEffect } from "react";
import Search from "components/search/Search";
import Map from "components/map/Map";

const Root = () => {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  

  const getData = async () => {
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=192.212.174.101`
      );
      const data = await res.json();
      setAddress(data);
      console.log(data);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
