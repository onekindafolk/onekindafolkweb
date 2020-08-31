import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { mq } from "../styleconfig"

const HoursWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
    @media (${mq.desktop}) {
      font-size: 24px;
    }
  }
`

const Hours = () => (
  <StaticQuery
    query={graphql`
      query HoursQuery {
        prismicHomepage {
          data {
            opening_hours_title {
              text
            }
            opening_hours_subtitle {
              text
            }
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
        }
      }
    `}
    render={data => <HoursComponent data={data.prismicHomepage.data} />}
  />
)

const HoursComponent = ({ data }) => {
  const title = data.opening_hours_title.text
  const subtitle = data.opening_hours_subtitle.text
  const {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  } = data
  return (
    <HoursWrapper>
      <h2>
        {title}
        {subtitle && (
          <>
            {" "}
            <em>{subtitle}</em>
          </>
        )}
      </h2>
      <p>Monday: {monday}</p>
      <p>Tuesday: {tuesday}</p>
      <p>Wednesday: {wednesday}</p>
      <p>Thursday: {thursday}</p>
      <p>Friday: {friday}</p>
      <p>Saturday: {saturday}</p>
      <p>Sunday: {sunday}</p>
    </HoursWrapper>
  )
}

export default Hours
