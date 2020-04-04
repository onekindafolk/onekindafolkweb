import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Social from "../components/social"
import Transition from "../components/transition"
import StoreContext, { defaultStoreContext } from "../context/StoreContext"
import { createGlobalStyle } from "styled-components"
import { colors } from "../styleconfig"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  background: ${colors.bg};
  color: ${colors.text};
  font-family: 'Source Code Pro', monospace;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
}

strong,
em,
b,
i,
h1,
h2,
h3,
h4 {
  font-weight: 300;
  font-style: normal;
}

h2 {
  font-size: 32px;
  letter-spacing: 3px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 16px;
  em {
    text-transform: none;
    display: block;
    font-size: 14px;
  }
}

p {
  font-size: 28px;
  letter-spacing: 0.5px;
  a {
    text-decoration: none;
    color: ${colors.accent}
  }
}`

class TemplateWrapper extends React.Component {
  state = {
    store: {
      ...defaultStoreContext,
      location: this.props.location,
      addVariantToCart: (variantId, quantity) => {
        if (variantId === "" || !quantity) {
          console.error("Both a size and quantity are required.")
          return
        }

        this.setState(state => ({
          store: {
            ...state.store,
            adding: true,
          },
        }))

        const { checkout, client } = this.state.store
        const checkoutId = checkout.id
        const lineItemsToUpdate = [
          { variantId, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .addLineItems(checkoutId, lineItemsToUpdate)
          .then(checkout => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout,
                adding: false,
              },
            }))
          })
      },
      removeLineItem: (client, checkoutID, lineItemID) => {
        return client.checkout
          .removeLineItems(checkoutID, [lineItemID])
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }))
          })
      },
      updateLineItem: (client, checkoutID, lineItemID, quantity) => {
        const lineItemsToUpdate = [
          { id: lineItemID, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .updateLineItems(checkoutID, lineItemsToUpdate)
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }))
          })
      },
    },
  }

  async initializeCheckout() {
    // Check for an existing cart.
    const isBrowser = typeof window !== "undefined"
    const existingCheckoutID = isBrowser
      ? localStorage.getItem("shopify_checkout_id")
      : null

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem("shopify_checkout_id", checkout.id)
      }

      this.setState(state => ({
        store: {
          ...state.store,
          checkout,
        },
      }))
    }

    const createNewCheckout = () => this.state.store.client.checkout.create()
    const fetchCheckout = id => this.state.store.client.checkout.fetch(id)

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID)

        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout)
          return
        }
      } catch (e) {
        localStorage.setItem("shopify_checkout_id", null)
      }
    }

    const newCheckout = await createNewCheckout()
    setCheckoutInState(newCheckout)
  }

  componentDidMount() {
    this.initializeCheckout()
  }

  render() {
    const { children, location } = this.props

    return (
      <StoreContext.Provider value={this.state.store}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <div>
              <Header />
              <GlobalStyle />
              <div>
                <Transition location={location}>{children}</Transition>
                <footer>
                  <Social />
                </footer>
              </div>
            </div>
          )}
        />
        <GlobalStyle />
      </StoreContext.Provider>
    )
  }
}

export default TemplateWrapper
