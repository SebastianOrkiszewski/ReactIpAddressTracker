import React from "react";
import { Wrapper } from "./Search.styles";
import Arrow from "assets/images/icon-arrow.svg";
import TrackerResults from "components/trackerResults/TrackerResults";

const Search = ({ results, ipAddress, handleSubmit, setIpAddress }) => {
  return (
    <Wrapper>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="ipaddress"
          id="ipaddress"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button type="submit">
          <img src={Arrow} alt="Arrow" />
        </button>
      </form>
      <TrackerResults results={results} />
    </Wrapper>
  );
};

export default Search;
