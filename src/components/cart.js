import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import StoreContext from "../context/StoreContext"

const CartIcon = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 1001;
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
    transition: color 300ms ease-in-out;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
  transform: scale(1);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &.st-flash {
    transform: scale(1.4);
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
  const context = useContext(StoreContext)
  const { checkout } = context
  const [oldContextValue, saveContextValue] = useState(checkout)
  const [flashCount, updateFlashCount] = useState(false)

  let totalItemCount = 0

  useEffect(() => {
    updateFlashCount(true)
    clearTimeout(t)
    t = setTimeout(() => {
      updateFlashCount(false)
      clearTimeout(t)
    }, 500)
    saveContextValue(checkout)
  }, [checkout])

  checkout.lineItems.forEach(item => {
    totalItemCount += item.quantity
  })

  let link = "/"
  if (totalItemCount > 0) {
    link = "/checkout"
  }

  return (
    <Link to={link}>
      <CartIcon className={flashCount ? "st-flash" : ""}>
        <div>
          <svg width="36" viewBox="0 0 20 22">
            <path d="M17.4 21.4H2.9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h14.5c.3 0 .5.2.5.5v14.9c0 .3-.2.5-.5.5zm-14-1h13.5V6.5H3.4z" />
            <path d="M5.9 6.3c-.3 0-.5-.3-.5-.6C5.6 3.9 6.8.5 10.1.5s4.5 3.4 4.7 5.2c0 .3-.2.5-.4.5-.3 0-.5-.2-.5-.4s-.5-4.4-3.7-4.4-3.7 4.3-3.7 4.4c-.1.3-.3.5-.6.5z" />
          </svg>
          {totalItemCount > 0 && <span>{totalItemCount}</span>}
        </div>
      </CartIcon>
    </Link>
  )
}

export default Cart
