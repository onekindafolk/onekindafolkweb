import React from "react"
import styled from "styled-components"
import { colors } from "../styleconfig"

const AddressWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;

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

const Address = () => {
  return (
    <AddressWrapper>
      <h2>Find Us</h2>
      <a
        href="https://g.page/one-kinda-folk?share"
        title="click to open in Google Maps"
      >
        28a Dartmouth Road
        <br />
        Ranelagh
        <br />
        Dublin
        <br />
        Ireland
      </a>
    </AddressWrapper>
  )
}

export default Address
