import React from "react"
import styled from "styled-components"
import { mq } from "../styleconfig"
import candle from "../images/one-kinda-folk-logo-candle.png"

const CandleLogo = styled.div`
  text-align: center;

  img {
    width: 100px;
    margin: 0 auto;
    @media (${mq.desktop}) {
      width: 140px;
    }
  }
`

const CandleDivider = () => {
  return (
    <CandleLogo>
      <img src={candle} alt="One Kinda Folk Coffee Dublin" />
    </CandleLogo>
  )
}

export default CandleDivider
