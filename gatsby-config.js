require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `One Kinda Folk`,
    description: `Pouring 3fe coffee behind the most beautiful ivy wall in Dublin`,
    url: `https://www.onekindafolk.ie`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/one-kinda-folk-logo-candle.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `one-kinda-folk`,
        // The storefront access token
        accessToken: `${process.env.GATSBY_SHOPIFY_ACCESS}`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source code pro\:300,400`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "onekindafolk",
        accessToken: `${process.env.GATSBY_PRISMIC_ACCESS}`,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return true
        },
        lang: "*",
        typePathsFilenamePrefix: "prismic-typepaths---onekindafolk",
      },
    },
  ],
}
