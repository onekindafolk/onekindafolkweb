import React, { Component } from "react"

const axios = require("axios")

export default class GiftCertificate extends Component {
  createCheckout = () => {
    console.log("create checkout")

    axios({
      method: "post",
      url: "https://api.sumup.com/v0.1/checkouts",
      timeout: 3000,
      data: {
        checkout_reference: "JMH",
        amount: 10,
        currency: "EUR",
        pay_to_email: "R.elliman44@gmail.com",
      },
    }).then(function(response) {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.createCheckout}>10EUR gift certificate</button>
      </div>
    )
  }
}
