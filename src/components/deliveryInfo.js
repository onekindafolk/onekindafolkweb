import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Info = styled.div`
  background: #eee;
  margin: 30px 0 20px 0;
  padding: 10px 30px;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    strong {
      font-weight: 400;
    }
    a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const DeliveryInfo = () => (
  <StaticQuery
    query={graphql`
      query DeliveryInfoQuery {
        prismicHomepage {
          data {
            delivery_info_title {
              text
            }
            delivery_info {
              html
            }
          }
        }
      }
    `}
    render={data => <DeliveryInfoComponent data={data.prismicHomepage.data} />}
  />
)

const DeliveryInfoComponent = ({ data }) => {
  const title = data.delivery_info_title.text
  const info = data.delivery_info.html
  return (
    <Info>
      <h2 className="condensed">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: info }} />
    </Info>
  )
}

export default DeliveryInfo
