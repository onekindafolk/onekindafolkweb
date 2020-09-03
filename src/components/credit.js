import React from "react"
import styled from "styled-components"
import { colors } from "../styleconfig"

const CreditWrapper = styled.div`
  .page-checkout & {
    display: none;
  }
  text-align: right;
  margin: 15px;
  font-size: 14px;
  line-height: 16px;
  a {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid black;
    &:hover {
      color: ${colors.accent};
      border-color: ${colors.accent};
    }
  }
`

const Credit = () => {
  return (
    <CreditWrapper>
      built by <a href="https://www.jmh.codes">JMH</a>
    </CreditWrapper>
  )
}

export default Credit
