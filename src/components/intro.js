import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const IntroWrapper = styled.div`
  max-width: 710px;
  margin: 20px auto 50px auto;
  padding: 0 20px;
  text-align: center;

  p.large {
    font-size: 24px;
  }
  p.medium {
    font-size: 18px;
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
            title {
              text
            }
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
  const title = data.title.text
  const subtitle = data.subtitle.text
  const intro = data.intro.html
  return (
    <IntroWrapper>
      <p className="large">{title}</p>
      <p className="medium">{subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
    </IntroWrapper>
  )
}

export default Intro
