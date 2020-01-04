import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

import { HeaderComics } from "./HeaderComics";
import { BodyComics } from "./BodyComics";


export default function Comics() {
  const [popularMarvel, setPopularMarvel] = useState([]);

  


  return (
    <Container>
      <HeaderComics />
      <BodyComics popularMarvel={popularMarvel} />
    </Container>
  );
}
