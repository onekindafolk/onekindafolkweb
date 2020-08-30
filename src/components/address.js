import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { colors } from "../styleconfig"

const AddressWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;

  p {
    margin: 0;
  }

  a {
    font-size: 28px;
    text-decoration: none;
    color: ${colors.text};
    display: block;
    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      color: ${colors.accent};
    }
  }
`

const Address = () => (
  <StaticQuery
    query={graphql`
      query AddressQuery {
        prismicHomepage {
          data {
            address_title {
              text
            }
            address {
              html
            }
          }
        }
      }
    `}
    render={data => <AddressComponent data={data.prismicHomepage.data} />}
  />
)

const AddressComponent = ({ data }) => {
  const title = data.address_title.text
  const address = data.address.html
  return (
    <AddressWrapper>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: address }} />
    </AddressWrapper>
  )
}

export default Address
