import React from "react"
import { Link } from "gatsby"
import Cart from "./cart.js"
import styled from "styled-components"

import logo from "../images/one-kinda-folk-logo.png"

const Logo = styled.div`
  text-align: center;
  h1 {
    margin: 20px auto 0 auto;
  }
  img {
    height: 280px;
  }
`

const Header = () => (
  <header>
    <Link to="/">
      <Logo>
        <h1>
          <img src={logo} alt="One Kinda Folk Coffee Dublin" />
        </h1>
      </Logo>
      <Cart />
    </Link>
  </header>
)

export default Header
