import React from "react"
import styled from "styled-components"

const IntroWrapper = styled.div`
  max-width: 710px;
  margin: 20px auto 50px auto;
  padding: 0 20px;

  p.large {
    font-size: 24px;
  }
  p.medium {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
`

const Intro = () => {
  return (
    <IntroWrapper>
      <p className="large">
        Pouring 3fe coffee behind the most beautiful ivy wall in Dublin
      </p>
      <p className="medium">“There’s only one kinda folk, folks”</p>
      <p>
        An old shed that used to house cobwebs and yoga mats is now a Byron Bay
        inspired hidden little gem in the middle of the city. Set behind the
        most gorgeous ivy wall you’ll find a little oasis filled with dried
        flowers and the smells of specialty coffee and chai brewing.
      </p>

      <p>
        We are passionate about coffee, good coffee and are proudly stocked by
        3fe. Fresh pastries and a range of vegan, gluten free and dairy free
        treats are delivered daily by local suppliers.
      </p>

      <p>Coffee, community, tunes and chai. Get down.</p>
    </IntroWrapper>
  )
}

export default Intro
