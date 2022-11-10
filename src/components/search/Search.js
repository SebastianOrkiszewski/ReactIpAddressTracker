import React from "react";
import { Wrapper } from "./Search.styles";

import Arrow from "assets/images/icon-arrow.svg";

const Search = () => {
  return (
    <Wrapper>
      <h1>Ip Address Tracker</h1>
      <form action="">
        <input
          type="text"
          name="ipaddress"
          id="ipaddress"
          placeholder="Search for any IP address or domain"
          
        />
        <button>
          <img src={Arrow} alt="Arrow" />
        </button>
      </form>
    </Wrapper>
  );
};

export default Search;
