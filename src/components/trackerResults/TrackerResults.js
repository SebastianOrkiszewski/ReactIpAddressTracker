import React from "react";
import { Wrapper, Information } from "./TrackerResults.styles";

const TrackerResults = ({ results }) => {
  return (
    <Wrapper>
      <Information border="solid 1px grey">
        <h2>IP Adress</h2>
        <p>{results.ip}</p>
      </Information>
      <Information border="solid 1px grey" >
        <h2>Location</h2>
        <p>{results.location.city}, {results.location.region}</p>
      </Information>
      <Information border="solid 1px grey" >
        <h2>TIME ZONE</h2>
        <p>UTC {results.location.timezone}</p>
      </Information>
      <Information >
        <h2>ISP</h2>
        <p>{results.isp}</p>
      </Information>
    </Wrapper>
  );
};

export default TrackerResults;
