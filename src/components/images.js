import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Photos = styled.section`
  height: 25vh;
  max-height: 750px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 640px) {
    height: 50vh;
  }

  img {
    height: 100%;
    margin-right: 16px;
  }
`

const Images = () => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        prismicHomepage {
          data {
            gallery {
              image {
                alt
                localFile {
                  id
                  childImageSharp {
                    fixed(height: 750) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ImagesComponent data={data.prismicHomepage.data} />}
  />
)

const ImagesComponent = ({ data }) => {
  const { gallery } = data
  return (
    <Photos>
      {gallery.map(item => {
        const { image } = item
        const { alt } = image
        return (
          <img
            key={image.localFile.id}
            src={image.localFile.childImageSharp.fixed.src}
            alt={alt}
          />
        )
      })}
    </Photos>
  )
}

export default Images
