import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { mq } from "../styleconfig"

const ContactWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;

  p {
    margin: 0;
    font-size: 16px;
    padding: 0 40px;
    @media (${mq.desktop}) {
      font-size: 18px;
      padding: 0;
    }
  }
`

const Contact = () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        prismicHomepage {
          data {
            contact_title {
              text
            }
            contact {
              html
            }
          }
        }
      }
    `}
    render={data => <ContactComponent data={data.prismicHomepage.data} />}
  />
)

const ContactComponent = ({ data }) => {
  const title = data.contact_title.text
  const contact = data.contact.html
  return (
    <ContactWrapper>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: contact }} />
    </ContactWrapper>
  )
}

export default Contact
