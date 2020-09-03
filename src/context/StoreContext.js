import React from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  storefrontAccessToken: `${process.env.GATSBY_SHOPIFY_ACCESS}`,
  domain: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  location: null,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext
