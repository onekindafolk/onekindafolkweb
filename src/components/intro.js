import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const IntroWrapper = styled.div`
  max-width: 710px;
  margin: 20px auto 50px auto;
  padding: 0 50px;
  text-align: left;
  p.medium {
    font-size: 18px;
    font-weight: 400;
  }
  p {
    font-size: 14px;
  }
`

const Intro = () => (
  <StaticQuery
    query={graphql`
      query IntroQuery {
        prismicHomepage {
          data {
            subtitle {
              text
            }
            intro {
              html
            }
          }
        }
      }
    `}
    render={data => <IntroComponent data={data.prismicHomepage.data} />}
  />
)

const IntroComponent = ({ data }) => {
  const subtitle = data.subtitle.text
  const intro = data.intro.html
  return (
    <IntroWrapper>
      <p className="medium">{subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
    </IntroWrapper>
  )
}

export default Intro
