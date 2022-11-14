import React from "react";
import { useState, useEffect } from "react";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./Root.styles";
import Search from "components/search/Search";
import Map from "components/map/Map";

const Root = () => {
  const [results, setResults] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    try {
      const getYourAddress = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        setResults(data);
        console.log(data);
      };

      getYourAddress();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  const getEnteredAddress = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
    );
    const data = await res.json();
    setResults(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress("");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          {results && (
            <>
              <Search
                results={results}
                ipAddress={ipAddress}
                handleSubmit={handleSubmit}
                setIpAddress={setIpAddress}
              />
              <Map results={results} />
            </>
          )}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Root;
