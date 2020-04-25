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
      <p>Monday: Closed</p>
      <p>Tuesday: 10am - 3pm</p>
      <p>Wednesday: 10am - 3pm</p>
      <p>Thursday: 10am - 3pm</p>
      <p>Friday: 10am - 3pm</p>
      <p>Saturday: 10am - 3pm</p>
      <p>Sunday: 10am - 3pm</p>
    </HoursWrapper>
  )
}

export default Hours
