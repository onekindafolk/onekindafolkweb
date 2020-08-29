import React from "react"
import styled from "styled-components"

const HoursWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;

  p {
    margin: 0;
    font-size: 24px;
  }
`

const Hours = () => {
  return (
    <HoursWrapper>
      <h2>
        Opening Hours <em>Temporary opening hours due to COVID-19</em>
      </h2>
      <p>Monday: 8:30am - 4pm</p>
      <p>Tuesday: 8:30am - 4pm</p>
      <p>Wednesday: 8:30am - 4pm</p>
      <p>Thursday: 8:30am - 4pm</p>
      <p>Friday: 8:30am - 4pm</p>
      <p>Saturday: 9am - 4pm</p>
      <p>Sunday: 9am - 4pm</p>
    </HoursWrapper>
  )
}

export default Hours
