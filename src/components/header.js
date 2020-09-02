import React from "react"
import { Link } from "gatsby"
import Cart from "./cart.js"
import styled from "styled-components"
import { mq } from "../styleconfig"

import logo from "../images/one-kinda-folk-logo.png"

const HeaderContainer = styled.header`
  text-align: center;
  .logoLink {
    display: inline-block;
  }
`

const Logo = styled.div`
  text-align: center;
  h1 {
    margin: 20px auto 0 auto;
  }
  img {
    transition: height 450ms ease-in-out;
    .page-homepage & {
      height: 200px;
      @media (${mq.desktop}) {
        height: 280px;
      }
    }
    .page-pdp & {
      transition: none;
    }
    height: 140px;
  }
`

const Header = () => (
  <HeaderContainer>
    <Link to="/" className="logoLink">
      <Logo>
        <h1>
          <img src={logo} alt="One Kinda Folk Coffee Dublin" />
        </h1>
      </Logo>
    </Link>
    <Cart />
  </HeaderContainer>
)

export default Header
