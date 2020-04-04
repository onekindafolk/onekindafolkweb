const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `/shop/${edge.node.handle}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        id: edge.node.id,
        handle: edge.node.handle,
      },
    })
  })
}
