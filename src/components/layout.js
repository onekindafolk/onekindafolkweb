/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { colors } from "../styleconfig"

import Header from "./header"
import Social from "./social"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  background: ${colors.bg};
  color: ${colors.text};
  font-family: 'Source Code Pro', monospace;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  cursor: pointer;
  font-family: 'Source Code Pro', monospace;
  font-weight: 300;
  font-size: 30px;
  padding: 10px;
  background: black;
  color: white;
  border: 0;
  transition: all 300ms ease-in-out;
  &:hover,
  &:focus {
    background: ${colors.accent}
  }
}

strong,
em,
b,
i,
h1,
h2,
h3,
h4 {
  font-weight: 300;
  font-style: normal;
}

h2 {
  font-size: 32px;
  letter-spacing: 3px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 16px;
  em {
    text-transform: none;
    display: block;
    font-size: 14px;
  }
}

p {
  font-size: 28px;
  letter-spacing: 0.5px;
  a {
    text-decoration: none;
    color: ${colors.accent}
  }
}`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <div>
        <main>{children}</main>
        <footer>
          <Social />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
