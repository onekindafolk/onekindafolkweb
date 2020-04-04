import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../images/one-kinda-folk-og.jpeg"

function SEO(props) {
  const { description, lang, title, type, price, image, pathname } = props

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata.url

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

  if (siteUrl) {
    metaTags.push({ name: "og:url", content: `${siteUrl}/${pathname || ""}` })
  }
  if (price) {
    metaTags.push({ name: "product:price:amount", content: price })
    metaTags.push({ name: "product:price:currency", content: "EUR" })
  }

  if (siteUrl && image) {
    metaTags.push({
      name: "og:image",
      content: `${siteUrl}${image}`,
    })
  } else if (siteUrl && ogImage) {
    metaTags.push({
      name: "og:image",
      content: `${siteUrl}${ogImage}`,
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
