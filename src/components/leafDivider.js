import React from "react"
import styled from "styled-components"
import { mq } from "../styleconfig"
import leaf from "../images/OKF_leaf_420.jpg"

const LeafLogo = styled.div`
  text-align: center;

  img {
    width: 100px;
    margin: 0 auto;
    @media (${mq.desktop}) {
      width: 140px;
    }
  }
`

const LeafDivider = () => {
  return (
    <LeafLogo>
      <img src={leaf} alt="One Kinda Folk Coffee Dublin" />
    </LeafLogo>
  )
}

export default LeafDivider
