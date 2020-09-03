require("dotenv").config({
  path: `.env`,
})

const path = require("path")
const atob = require("atob")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === "/") {
    page.context.layout = "homepage"
  } else if (page.path === "/checkout/") {
    page.context.layout = "checkout"
  }
  createPage(page)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            shopifyId
            handle
            variants {
              shopifyId
            }
          }
        }
      }
    }
  `)

  const promise = pages.data.allShopifyProduct.edges.map(async edge => {
    const { id, shopifyId, handle } = edge.node
    const variantId = edge.node.variants[0].shopifyId
    const adminApiProductId = atob(shopifyId).replace(
      "gid://shopify/Product/",
      ""
    )
    const adminApiProductVariantId = atob(variantId).replace(
      "gid://shopify/ProductVariant/",
      ""
    )
    const inventoryIdReq = await fetch(
      `https://${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com/admin/api/2020-07/products/${adminApiProductId}/variants/${adminApiProductVariantId}.json`,
      {
        method: "get",
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.GATSBY_SHOPIFY_PASSWORD,
        }),
      }
    )
    const inventoryIdReqData = await inventoryIdReq.json()
    const { inventory_item_id } = inventoryIdReqData.variant
    const inventoryLevelsReq = await fetch(
      `https://${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com/admin/api/2020-07/inventory_levels.json?inventory_item_ids=${inventory_item_id}`,
      {
        method: "get",
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.GATSBY_SHOPIFY_PASSWORD,
        }),
      }
    )
    const inventoryLevelsReqData = await inventoryLevelsReq.json()
    const { available } = inventoryLevelsReqData.inventory_levels[0]

    // check inventory levels at build time
    // when a product inventory level changes in Shopify it triggers a rebuild via webhook
    // final inventory check happens on Shopify checkout page
    // if user has more than available in their bag at that point they are asked to adjust qty
    createPage({
      path: `/shop/${handle}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        id: id,
        handle: handle,
        layout: "pdp",
        quantityAvailable: available,
      },
    })
  })

  await Promise.all(promise)
}
