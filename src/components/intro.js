import React from "react"
import styled from "styled-components"

const IntroWrapper = styled.p`
  font-size: 32px;
  max-width: 710px;
  margin: 20px auto 50px auto;
  padding: 0 20px;
`

const Intro = () => {
  return (
    <IntroWrapper>
      Pouring 3fe coffee behind the most beautiful ivy wall in Dublin
    </IntroWrapper>
  )
}

export default Intro
