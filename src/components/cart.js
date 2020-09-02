import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import StoreContext from "../context/StoreContext"

const CartIconWrapper = styled.div`
  position: fixed;
  &.st-empty {
    position: absolute;
  }
  top: 14px;
  right: 14px;
  z-index: 1001;
  .page-checkout & {
    display: none;
  }
`

const CartIcon = styled.button`
  padding: 4px;
  background: white;
  border-radius: 5px;
  div {
    position: relative;
  }
  span {
    position: absolute;
    top: 15px;
    left: 8px;
    background: transparent;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: black;
    transition: all 300ms ease-in-out;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    opacity: 1;
    .st-empty & {
      opacity: 0;
    }
  }
  transform: scale(1);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &.is-animating {
    transform: scale(1.2);
  }
  svg {
    path {
      fill: black;
      transition: fill 300ms ease-in-out;
    }
  }
`
let t
const Cart = props => {
  const [totalItemCount, setTotalItemCount] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const context = useContext(StoreContext)
  const { checkout } = context

  let itemCount = 0
  checkout.lineItems.forEach(item => {
    itemCount += item.quantity
  })
  if (totalItemCount !== itemCount) {
    if (totalItemCount !== null) {
      setIsAnimating(true)
      t = window.setTimeout(() => {
        setIsAnimating(false)
        clearTimeout(t)
      }, 450)
    }
    setTotalItemCount(itemCount)
  }

  return (
    <CartIconWrapper className={totalItemCount <= 0 ? "st-empty" : ""}>
      <Link to="/checkout">
        <CartIcon className={isAnimating ? "is-animating" : ""}>
          <div>
            <svg width="36" viewBox="0 0 20 22">
              <path d="M17.4 21.4H2.9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h14.5c.3 0 .5.2.5.5v14.9c0 .3-.2.5-.5.5zm-14-1h13.5V6.5H3.4z" />
              <path d="M5.9 6.3c-.3 0-.5-.3-.5-.6C5.6 3.9 6.8.5 10.1.5s4.5 3.4 4.7 5.2c0 .3-.2.5-.4.5-.3 0-.5-.2-.5-.4s-.5-4.4-3.7-4.4-3.7 4.3-3.7 4.4c-.1.3-.3.5-.6.5z" />
            </svg>
            <span>{totalItemCount === null ? "0" : totalItemCount}</span>
          </div>
        </CartIcon>
      </Link>
    </CartIconWrapper>
  )
}

export default Cart
