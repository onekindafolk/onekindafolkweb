import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;
`

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <ThanksWrapper>
      <p>Thank you! We will e-mail your gift voucher within 24 hours.</p>
      <p>
        <Link to="/">(go back to homepage)</Link>
      </p>
    </ThanksWrapper>
  </Layout>
)

export default ThanksPage
