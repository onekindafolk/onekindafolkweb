import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../components/seo"
import DeliveryInfo from "../components/deliveryInfo"
import CartLineItem from "../components/cartLineItem"
import styled from "styled-components"
import { primaryButton, mq } from "../styleconfig"

import StoreContext from "../context/StoreContext"

const Cart = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ShopCTA = styled.div`
  margin-top: 25px;
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
    @media (${mq.desktop}) {
      max-width: 300px;
    }
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
      ? "margin-top: 16px; font-weight: 400; font-size: 22px; line-height: 24px;"
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
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;
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

  const emptyCart = checkout.lineItems.length <= 0

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
      {checkout.id && (
        <Cart>
          <AnimatePresence exitBeforeEnter>
            {emptyCart && (
              <motion.div
                key="emptyCart"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ delay: 0.7 }}
              >
                <EmptyBag>
                  <h1>Your shopping bag is empty</h1>
                  <ShopCTA>
                    <Link to="/">Go Shopping!</Link>
                  </ShopCTA>
                </EmptyBag>
              </motion.div>
            )}

            {!emptyCart && (
              <motion.div
                key="cartSummary"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
              >
                <CartSummary>
                  <AnimatePresence>
                    {checkout.lineItems.map(item => {
                      return (
                        <motion.div
                          key={item.id}
                          initial={{
                            opacity: 1,
                            height: "auto",
                            overflow: "hidden",
                          }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <CartLineItem line_item={item} />
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                  <Total>
                    <TotalLineItem>
                      <TotalLineItemLabel>Subtotal</TotalLineItemLabel>
                      <TotalLineItemAmount>
                        €{parseFloat(subtotal).toFixed(2)}
                      </TotalLineItemAmount>
                    </TotalLineItem>
                    <TotalLineItem>
                      <TotalLineItemLabel>
                        Estimated Delivery
                      </TotalLineItemLabel>
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
                    <Button onClick={handleCheckout}>Checkout Now</Button>
                    <DeliveryInfo />
                  </Total>
                </CartSummary>
              </motion.div>
            )}
          </AnimatePresence>
        </Cart>
      )}
    </>
  )
}

export default CartPage
