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
      <h2>Opening Hours</h2>
      <p>Monday: CLOSED</p>
      <p>Tuesday: 8am - 3pm</p>
      <p>Wednesday: 8am - 3pm</p>
      <p>Thursday: 8am - 3pm</p>
      <p>Friday: 8am - 3pm</p>
      <p>Saturday: 10am - 3pm</p>
      <p>Sunday: CLOSED</p>
    </HoursWrapper>
  )
}

export default Hours
