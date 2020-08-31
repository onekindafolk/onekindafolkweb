import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SubheadingWrapper = styled.div`
  max-width: 710px;
  margin: 20px auto 50px auto;
  padding: 0 20px;
  text-align: center;
  p.large {
    font-size: 24px;
  }
`

const Subheading = () => (
  <StaticQuery
    query={graphql`
      query SubheadingQuery {
        prismicHomepage {
          data {
            title {
              text
            }
          }
        }
      }
    `}
    render={data => <SubheadingComponent data={data.prismicHomepage.data} />}
  />
)

const SubheadingComponent = ({ data }) => {
  const title = data.title.text
  return (
    <SubheadingWrapper>
      <p className="large">{title}</p>
    </SubheadingWrapper>
  )
}

export default Subheading
