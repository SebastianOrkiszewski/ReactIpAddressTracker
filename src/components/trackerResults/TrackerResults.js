import React from "react";
import { Wrapper, Information } from "./TrackerResults.styles";

const TrackerResults = ({address}) => {
  return (
    
    
<Wrapper>
      <Information>
        <h2>IP Adress</h2>
        <p>{address.ip}</p>
      </Information>
      <Information>
        <h2>Location</h2>
        <p>{address.location.city}, {address.location.region}</p>
      </Information>
      <Information>
        <h2>TIMEZONE</h2>
        <p>UTC {address.location.timezone}</p>
      </Information>
      <Information>
        <h2>ISP</h2>
        <p>{address.isp}</p>
      </Information>
    </Wrapper>
    
  );
};

export default TrackerResults;
