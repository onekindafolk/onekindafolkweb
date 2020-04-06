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
    width: 110px;
    display: inline-block;
    &.st-sale {
      color: red;
    }
  }
  button {
    margin-left: auto;
    width: 100%;
    margin-top: 15px;
  }
  > div {
    width: 100%;
    text-align: right;
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
              <div>
                SUBTOTAL <em>€{parseFloat(subtotal).toFixed(2)}</em>
              </div>
              <div>
                ESTIMATED DELIVERY <em>{freeShipping ? "FREE" : "€5.00"}</em>
              </div>
              {discount && (
                <div>
                  {discountTitle}{" "}
                  <em className="st-sale">
                    -€{parseFloat(discountAmount).toFixed(2)}
                  </em>
                </div>
              )}
              <div>
                ESTIMATED TOTAL{" "}
                <em>
                  {freeShipping
                    ? `€${total}`
                    : `€${(parseFloat(subtotal) + 5).toFixed(2)}`}
                </em>
              </div>
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
