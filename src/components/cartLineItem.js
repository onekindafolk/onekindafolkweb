import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "../context/StoreContext"
import { textLinkButton, mq } from "../styleconfig"

const LineItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-align: left;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 15px;
  @media (${mq.desktop}) {
    font-size: 28px;
    line-height: 32px;
  }
`

const ImageWrapper = styled.div`
  width: 110px;
  height: 150px;
  text-align: center;
`

const LineItemDetails = styled.div`
  margin-left: 15px;
`

const Title = styled.div``

const Quantity = styled.div`
  font-weight: 300;
  font-size: 18px;
`

const RemoveButton = styled.button`
  margin-top: 10px;
  ${textLinkButton}
`

const CartLineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="150px"
    />
  ) : null

  return (
    <LineItem>
      <ImageWrapper>{variantImage}</ImageWrapper>
      <LineItemDetails>
        <Title>{line_item.title}</Title>
        <Quantity>
          {line_item.quantity} @ €{line_item.variant.price}
        </Quantity>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </LineItemDetails>
    </LineItem>
  )
}

export default CartLineItem
