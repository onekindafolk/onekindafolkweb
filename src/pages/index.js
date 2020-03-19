import React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Images from "../components/images"
import Address from "../components/address"
import Hours from "../components/hours"
import CandleDivider from "../components/candleDivider"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Images />
    <Address />
    <CandleDivider />
    <Hours />
  </Layout>
)

export default IndexPage
