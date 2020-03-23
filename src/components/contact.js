import React from "react"
import styled from "styled-components"

const ContactWrapper = styled.section`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
  }
`

const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Contact Us</h2>
      <p>
        <a href="mailto:onekindafolk@gmail.com">e-mail us</a> or send us a
        message on{" "}
        <a
          href="https://www.instagram.com/onekindafolkcoffee"
          className="instagram"
        >
          Instagram
        </a>
      </p>
    </ContactWrapper>
  )
}

export default Contact
