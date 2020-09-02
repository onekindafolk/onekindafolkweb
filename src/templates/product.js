import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import StoreContext from "../context/StoreContext"
import { primaryButton, actionButton, textLinkButton, mq } from "../styleconfig"

const buttonWidth = "240px"

const ProductPage = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 730px;
  margin: 0 auto 60px auto;
  .gatsby-image-wrapper {
    width: 100%;
    @media (${mq.desktop}) {
      width: 280px;
    }
  }
  @media (${mq.desktop}) {
    flex-direction: row;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`

const ImageWrapper = styled.div`
  @media (${mq.mobileOnly}) {
    padding: 0 8%;
    margin: 20px 0;
  }
`

const Button = styled.button`
  ${primaryButton}
  @media (${mq.desktop}) {
    width: ${buttonWidth};
  }
`

const ActionButton = styled.div`
  a {
    ${actionButton}
    display: block;
    width: ${buttonWidth};
    @media (${mq.mobileOnly}) {
      width: 100%;
    }
  }
`

const ButtonLink = styled.button`
  margin: 20px 0;
  ${textLinkButton}
  width: auto !important;
`

const ProductDetails = styled.div`
  max-width: 380px;
  margin: 0 auto;
  padding: 0 8%;
  display: flex;
  flex-direction: column;
  @media (${mq.desktop}) {
    margin-top: 20px;
    padding: 0;
  }
  h1 {
    text-align: left;
    padding-top: 0;
    margin: 0 0 5px 0;
    font-weight: 300;
    font-size: 20px;
    line-height: 22px;
  }
  .price {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 400;
    @media (${mq.desktop}) {
      margin-top: 10px;
    }
  }
  button {
    margin: 20px 0;
    width: 100%;
    @media (${mq.desktop}) {
      width: ${buttonWidth};
    }
  }
`

const Description = styled.div`
  p {
    font-size: 14px;
  }
`

export default ({ data }) => {
  const context = useContext(StoreContext)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  const handleAddToCart = () => {
    context.addVariantToCart(data.shopifyProduct.variants[0].shopifyId, 1)
    setShowAddedMessage(true)
  }

  const product = data.shopifyProduct
  const title = product.title
  const price = product.variants[0].price
  const availableForSale = product.variants[0].availableForSale
  const { description, descriptionHtml, handle } = product
  const socialImage = product.images[0].localFile.childImageSharp.fixed.src
  const productImage = product.images[0].localFile.childImageSharp.fluid

  return (
    <>
      <SEO
        title={title}
        description={description}
        type="product"
        price={price}
        image={socialImage}
        pathname={`shop/${handle}`}
      />
      <ProductPage>
        <ImageWrapper>
          <Img fluid={productImage} alt={title} />
        </ImageWrapper>
        <ProductDetails>
          <h1>{title}</h1>
          <div className="price">€{price}</div>

          {availableForSale && (
            <Button disabled={context.adding} onClick={handleAddToCart}>
              Add to Bag
            </Button>
          )}
          {!availableForSale && <Button disabled>Sold Out</Button>}
          {showAddedMessage === true && (
            <motion.div
              initial={{ height: 0, overflow: "hidden" }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.45 }}
            >
              <ActionButton>
                <Link to="/checkout">Checkout Now →</Link>
              </ActionButton>
              <ButtonLink
                onClick={() => {
                  navigate("/#shop")
                }}
              >
                ← Back to Shop
              </ButtonLink>
            </motion.div>
          )}
          <Description
            dangerouslySetInnerHTML={{
              __html: descriptionHtml,
            }}
          />
        </ProductDetails>
      </ProductPage>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      description
      descriptionHtml
      productType
      variants {
        shopifyId
        title
        price
        availableForSale
        requiresShipping
      }
      images {
        id
        localFile {
          childImageSharp {
            fixed(width: 1080) {
              src
            }
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
