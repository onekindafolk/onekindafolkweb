import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { mq } from "../styleconfig"

const gridWidth = 1000
const gridPadding = 20
const gridGutter = 20

const ProductListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  grid-gap: ${gridGutter}px;
  padding: 0 ${gridPadding}px;
  margin: 50px auto;
  max-width: ${gridWidth}px;
  @media (${mq.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ProductCard = styled.div`
  background: white;
  text-align: center;
  transition: all 200ms ease-in-out !important;
  margin-bottom: 10px;
  @media (${mq.desktop}) {
    margin-bottom: 30px;
  }
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: black;
  }

  .product-name {
    font-size: 14px;
    width: 94%;
    margin: 0 auto;
    letter-spacing: 0;
  }
  .product-price {
    font-size: 14px;
    letter-spacing: 0;
    font-weight: 400;
    margin: 5px 0;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  margin-bottom: 10px;
  overflow: hidden;
  // prettier-ignore
  height: calc(((100vw - (2 * ${gridPadding}px) - (1 * ${gridGutter}px)) / 2) * 1.3333333333);
  @media (${mq.desktop}) {
    height: calc(((100vw - (2 * ${gridPadding}px) - (3 * ${gridGutter}px)) / 4) * 1.3333333333);
    max-height: calc(((${gridWidth}px - (2 * ${gridPadding}px) - (3 * ${gridGutter}px)) / 4) * 1.3333333333);
  }
`

const ProductList = () => (
  <StaticQuery
    query={graphql`
      query ProductQuery {
        shopifyCollection(title: { eq: "Products" }) {
          products {
            id
            title
            handle
            availableForSale
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            variants {
              id
              title
              price
              requiresShipping
            }
          }
        }
      }
    `}
    render={data => <List data={data} />}
  />
)

const List = ({ data }) => {
  return (
    <ProductListContainer id="shop">
      {data.shopifyCollection.products.map(product => {
        return (
          <ProductCard key={product.id}>
            <Link to={`/shop/${product.handle}`}>
              <ImageWrapper>
                <img
                  src={product.images[0].localFile.childImageSharp.fluid.src}
                  alt={product.title}
                />
              </ImageWrapper>
              <div>
                <p className="product-name">{product.title}</p>
                <p className="product-price">€{product.variants[0].price}</p>
              </div>
            </Link>
          </ProductCard>
        )
      })}
    </ProductListContainer>
  )
}

export default ProductList
