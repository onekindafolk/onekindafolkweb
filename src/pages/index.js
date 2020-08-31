import React from "react"
import Subheading from "../components/subheading"
import Intro from "../components/intro"
import Images from "../components/images"
import ProductList from "../components/productList"
import Address from "../components/address"
import Hours from "../components/hours"
import Contact from "../components/contact"
import CandleDivider from "../components/candleDivider"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <>
      <SEO />
      <Subheading />
      <Images />
      <Intro />
      <ProductList />
      <Address />
      <CandleDivider />
      <Hours />
      <Contact />
    </>
  )
}

export default IndexPage
