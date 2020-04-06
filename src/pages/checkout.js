import React, { useContext } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import CartLineItem from "../components/cartLineItem"
import styled from "styled-components"
import { primaryButton, mq } from "../styleconfig"

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

  button {
    margin-left: auto;
    width: 100%;
    margin-top: 15px;
  }
`
const TotalLineItem = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  ${props =>
    props.promo ? "color: red; margin: 12px 0;" : "text-transform: uppercase;"};
  ${props =>
    props.total
      ? "margin-top: 16px; font-weight: 400; font-size: 16px; line-height: 18px;"
      : "font-size: 14px; line-height: 16px;"};
  @media (${mq.desktop}) {
    ${props =>
      props.total
        ? "font-size: 24px; line-height: 26px;"
        : "font-size: 18px; line-height: 20px;"};
  }
`

const TotalLineItemLabel = styled.span`
  display: inline-block;
  width: 70%;
`

const TotalLineItemAmount = styled.span`
  font-weight: 400;
  margin-left: 10px;
  display: inline-block;
  width: 30%;
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

  const total = checkout?.totalPrice
  const subtotal = checkout?.lineItemsSubtotalPrice?.amount
  const discount = checkout?.discountApplications?.[0]
  const discountAmount = discount?.value?.amount
  const discountTitle = discount?.title

  let freeShipping = false
  if (checkout.lineItems.length > 0) {
    for (let item of checkout.lineItems) {
      if (item.title.toLowerCase().includes("gift voucher")) {
        freeShipping = true
      } else {
        break
      }
    }
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
              <TotalLineItem>
                <TotalLineItemLabel>Subtotal</TotalLineItemLabel>
                <TotalLineItemAmount>
                  €{parseFloat(subtotal).toFixed(2)}
                </TotalLineItemAmount>
              </TotalLineItem>
              <TotalLineItem>
                <TotalLineItemLabel>Estimated Delivery</TotalLineItemLabel>
                <TotalLineItemAmount>
                  {freeShipping ? "FREE" : "€5.00"}
                </TotalLineItemAmount>
              </TotalLineItem>
              {discount && (
                <TotalLineItem promo>
                  <TotalLineItemLabel>{discountTitle}</TotalLineItemLabel>
                  <TotalLineItemAmount>
                    -€{parseFloat(discountAmount).toFixed(2)}
                  </TotalLineItemAmount>
                </TotalLineItem>
              )}
              <TotalLineItem total>
                <TotalLineItemLabel>Estimated Total</TotalLineItemLabel>
                <TotalLineItemAmount>
                  {freeShipping
                    ? `€${total}`
                    : `€${(parseFloat(subtotal) + 5).toFixed(2)}`}
                </TotalLineItemAmount>
              </TotalLineItem>
              <p>Delivery charges calculated at checkout</p>
              <Button onClick={handleCheckout}>Checkout Now</Button>
            </Total>
          </CartSummary>
        )}
      </Cart>
    </>
  )
}

export default CartPage
