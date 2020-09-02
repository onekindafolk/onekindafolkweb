import React from "react"
import styled from "styled-components"
import { colors } from "../styleconfig"

import instagramLogo from "../images/icons/instagram.svg"

const iconHeight = 30
const iconWidth = iconHeight

const SocialLinks = styled.ul`
  .page-checkout & {
    display: none;
  }
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 100px auto 50px auto;

  li {
    margin: 0 5px;
  }

  a {
    display: block;
    text-indent: -9999px;
    width: ${iconWidth}px;
    height: ${iconHeight}px;

    mask-size: ${iconHeight}px ${iconWidth}px;
    background-color: #000;
    transition: background-color 300ms ease-in-out;

    &.instagram {
      mask-image: url(${instagramLogo});
    }

    &:hover,
    &:focus {
      background-color: ${colors.accent};
    }
  }
`

const Social = () => {
  return (
    <SocialLinks>
      <li>
        <a
          href="https://www.instagram.com/onekindafolkcoffee"
          className="instagram"
        >
          Instagram
        </a>
      </li>
    </SocialLinks>
  )
}

export default Social
