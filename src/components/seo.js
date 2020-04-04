import React, { useContext } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import StoreContext from "../context/StoreContext"
import ogImage from "../images/one-kinda-folk-og.jpeg"

function SEO(props) {
  const { description, lang, title, type, price, image } = props

  const context = useContext(StoreContext)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title
  const socialTitle = title
    ? `${title} @ ${site.siteMetadata.title}`
    : site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: socialTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:url`,
      content: context.location.href,
    },
    {
      property: `og:type`,
      content: type || "website",
    },
    {
      name: `og:locale`,
      content: `en_IE`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: socialTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (price) {
    metaTags.push({ name: "product:price:amount", content: price })
    metaTags.push({ name: "prouct:price:currency", content: "EUR" })
  }

  if (image) {
    metaTags.push({
      name: "og:image",
      content: `${context.location.origin}${image}`,
    })
  } else {
    metaTags.push({
      name: "og:image",
      content: `${context.location.origin}${ogImage}`,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s`}
      meta={metaTags.concat()}
    ></Helmet>
  )
}

export default SEO
