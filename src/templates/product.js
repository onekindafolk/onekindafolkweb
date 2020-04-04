import React, { useContext, useState } from "react"
import Img from "gatsby-image"
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
    padding: 0 20px;
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

const ButtonLink = styled.div`
  a {
    ${textLinkButton}
  }
`

const ButtonLinkWrapper = styled.div`
  animation: fadein 1250ms;
  > div {
    margin-top: 20px;
  }
`

const ProductDetails = styled.div`
  max-width: 380px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (${mq.desktop}) {
    margin-top: 20px;
  }
  h1 {
    text-align: left;
    padding-top: 0;
    margin: 0 0 5px 0;
    font-weight: 300;
    font-size: 34px;
    line-height: 38px;
  }
  .price {
    font-size: 24px;
    text-align: center;
    margin-bottom: 5px;
    @media (${mq.desktop}) {
      text-align: left;
      margin-top: 10px;
    }
  }
  button {
    margin-top: 20px;
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

export default ({ data, location }) => {
  const context = useContext(StoreContext)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  const handleAddToCart = () => {
    context.addVariantToCart(data.shopifyProduct.variants[0].shopifyId, 1)
    setShowAddedMessage(true)
  }

  const product = data.shopifyProduct
  const title = product.title
  const price = product.variants[0].price
  const { description, descriptionHtml } = product
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
        location={location}
      />
      <ProductPage>
        <ImageWrapper>
          <Img fluid={productImage} alt={title} />
        </ImageWrapper>
        <ProductDetails>
          <h1>{title}</h1>
          <div className="price">€{price}</div>
          <Description
            dangerouslySetInnerHTML={{
              __html: descriptionHtml,
            }}
          />
          <Button disabled={context.adding} onClick={handleAddToCart}>
            Add to Bag
          </Button>
          {showAddedMessage === true && (
            <ButtonLinkWrapper>
              <ActionButton>
                <Link to="/checkout">Checkout Now →</Link>
              </ActionButton>
              <ButtonLink>
                <Link to="/">← Back to Shop</Link>
              </ButtonLink>
            </ButtonLinkWrapper>
          )}
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
      }
      images {
        id
        localFile {
          childImageSharp {
            fixed(width: 300) {
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
