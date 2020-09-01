import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO(props) {
  const { description, lang, title, type, price, image, pathname } = props

  const { site, prismicHomepage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
        prismicHomepage {
          data {
            seo_title
            seo_description
            seo_preview_image {
              localFile {
                childImageSharp {
                  fixed(width: 600) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const seoTitle = prismicHomepage.data.seo_title
  const seoDescription = prismicHomepage.data.seo_description
  const seoImage =
    prismicHomepage.data.seo_preview_image.localFile.childImageSharp.fixed.src

  const siteUrl = site.siteMetadata.url

  const metaTitle = title ? `${title} | ${seoTitle}` : seoTitle
  const socialTitle = title ? `${title} @ ${seoTitle}` : seoTitle
  const metaDescription = description || seoDescription

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
  } else if (siteUrl && seoImage) {
    metaTags.push({
      name: "og:image",
      content: `${siteUrl}${seoImage}`,
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
