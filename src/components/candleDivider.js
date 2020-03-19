import React from "react"
import styled from "styled-components"

import candle from "../images/one-kinda-folk-logo-candle.png"

const CandleLogo = styled.div`
  text-align: center;

  img {
    width: 140px;
    margin: 0 auto;
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
