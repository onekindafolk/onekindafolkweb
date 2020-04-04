import React, { useContext } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import CartLineItem from "../components/cartLineItem"
import styled from "styled-components"
import { primaryButton } from "../styleconfig"

import StoreContext from "../context/StoreContext"

const Cart = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ShopCTA = styled.div`
  a {
    ${primaryButton}
  }
`

const CartSummary = styled.div`
  text-align: center;
  background: white;
  width: 100%;

  padding: 60px 20px;
`

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  font-size: 23px;
  em {
    font-style: normal;
    font-weight: 700;
    margin-left: 10px;
  }
  button {
    margin-left: auto;
    width: 100%;
    margin-top: 15px;
  }
`

const EmptyBag = styled.div`
  text-align: center;
  padding-top: 100px;
`

const Button = styled.button`
  ${primaryButton}
`

const CartPage = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <>
      <SEO title="Shopping Bag" pathname="checkout" />
      <Cart>
        {checkout.lineItems.length <= 0 && (
          <EmptyBag>
            <h1>Your shopping bag is empty</h1>
            <ShopCTA>
              <Link to="/">Go Shopping!</Link>
            </ShopCTA>
          </EmptyBag>
        )}

        {checkout.lineItems.length > 0 && (
          <CartSummary>
            {checkout.lineItems.map(item => {
              return <CartLineItem key={item.id} line_item={item} />
            })}
            <Total>
              <div>
                TOTAL <em>€{checkout.totalPrice}</em>
              </div>
              <Button onClick={handleCheckout}>Checkout Now</Button>
            </Total>
          </CartSummary>
        )}
      </Cart>
    </>
  )
}

export default CartPage
