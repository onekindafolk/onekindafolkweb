import React from "react"
import styled from "styled-components"

import img1 from "../images/one-kinda-folk-cafe-dublin-1.jpeg"
import img2 from "../images/one-kinda-folk-cafe-dublin-2.jpeg"
import img3 from "../images/vegan-cookies-at-one-kinda-folk-dublin.jpeg"
import img4 from "../images/pouring-coffee-at-one-kinda-folk-dublin.jpeg"
import img5 from "../images/coffee-and-a-croissant-at-one-kinda-folk-dublin.jpeg"
import img6 from "../images/pups-at-one-kinda-folk-dublin.jpeg"
import img7 from "../images/vegan-treats-at-one-kinda-folk-dublin.jpeg"
import img8 from "../images/coffee-at-one-kinda-folk-dublin.jpeg"
import img9 from "../images/coffee-and-treats-at-one-kinda-folk-dublin.jpeg"
import img10 from "../images/hot-drink-at-one-kinda-folk-dublin.jpeg"
import img11 from "../images/one-kinda-folk-dublin-coffee.jpeg"
import img12 from "../images/dog-friendly-cafe-one-kinda-folk-dublin.jpeg"
import img13 from "../images/one-kinda-folk-coffee-dublin-bike-sign.jpeg"

const Photos = styled.section`
  height: 35vh;
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

const Images = () => {
  return (
    <Photos>
      <img src={img1} alt="One Kinda Folk Coffee, Dublin, Ireland" />
      <img src={img2} alt="One Kinda Folk Coffee, Dublin, Ireland" />
      <img
        src={img3}
        alt="Vegan cookies at One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img
        src={img4}
        alt="Pouring coffee at One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img
        src={img5}
        alt="Coffee and a croissant at One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img src={img6} alt="Pups at One Kinda Folk Coffee, Dublin, Ireland" />
      <img
        src={img7}
        alt="Vegan treats at One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img src={img8} alt="Coffee at One Kinda Folk Coffee, Dublin, Ireland" />
      <img
        src={img9}
        alt="Coffee and treats at One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img
        src={img10}
        alt="Hot drink at One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img src={img11} alt="One Kinda Folk Coffee, Dublin, Ireland" />
      <img
        src={img12}
        alt="Dog friendly cafe, One Kinda Folk Coffee, Dublin, Ireland"
      />
      <img
        src={img13}
        alt="The bicycle sign at One Kinda Folk Coffee, Dublin, Ireland"
      />
    </Photos>
  )
}

export default Images
