import React from 'react'
import { Wrapper, Information } from './TrackerResults.styles'

const TrackerResults = () => {
  return (
    <Wrapper>
    <Information>
    <h2>IP Adress</h2>
    <p>192.1142.123.123</p>
    </Information>
    <Information>
    <h2>Location</h2>
    <p>Brooklyn, NY 10001</p>
    </Information>
    <Information>
    <h2>TIMEZONE</h2>
    <p>UTC-50:00</p>
    </Information>
    <Information>
    <h2>ISP</h2>
    <p>SpaceX Starlink</p>
    </Information>

    </Wrapper>
  )
}

export default TrackerResults