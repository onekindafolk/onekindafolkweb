import React from "react"
import Subheading from "../components/subheading"
import Intro from "../components/intro"
import Images from "../components/images"
import ProductList from "../components/productList"
import Address from "../components/address"
import Hours from "../components/hours"
import Contact from "../components/contact"
import LeafDivider from "../components/leafDivider"
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
      <LeafDivider />
      <Hours />
      <LeafDivider />
      <Contact />
    </>
  )
}

export default IndexPage
