import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 530px;
  margin: 40px auto;
  padding: 0 20px;
  h2 {
    text-align: center;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`

const Form = styled.form`
  margin: 10px;
`

const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`

export default class GiftVoucher extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Gift Vouchers</h2>
        <ButtonsWrapper>
          <Form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="PLR45YD59SAG8"
            />
            <Button type="submit">€10</Button>
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </Form>

          <Form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="YUJ8LFEHQ5GUJ"
            />
            <Button type="submit">€20</Button>
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </Form>

          <Form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="ZJ9V6A8U3WCR4"
            />
            <Button type="submit">€50</Button>
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </Form>
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}
