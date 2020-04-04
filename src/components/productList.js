import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { mq } from "../styleconfig"

const ProductListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
  padding: 0 20px;
  margin: 50px auto;
  max-width: 1000px;
  @media (${mq.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ProductCard = styled.div`
  background: white;
  text-align: center;
  transition: all 200ms ease-in-out !important;
  margin-bottom: 35px;
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
    font-size: 16px;
    width: 94%;
    margin: 5px auto 0 auto;
    letter-spacing: 2px;
  }
  .product-price {
    font-size: 14px;
    font-weight: 400;
    margin: 5px 0;
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
    <ProductListContainer>
      {data.shopifyCollection.products.map(product => {
        return (
          <ProductCard key={product.id}>
            <Link to={`/shop/${product.handle}`}>
              <img
                src={product.images[0].localFile.childImageSharp.fluid.src}
                alt={product.title}
              />
              <p className="product-name">{product.title}</p>
              <p className="product-price">€{product.variants[0].price}</p>
            </Link>
          </ProductCard>
        )
      })}
    </ProductListContainer>
  )
}

export default ProductList
