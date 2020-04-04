import React from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  storefrontAccessToken: `1f3c82872f2cd3dedce5957cc6494042`,
  domain: `one-kinda-folk.myshopify.com`,
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
