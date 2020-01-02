import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

import { HeaderComics } from "./HeaderComics";
import { BodyComics } from "./BodyComics";

import api from "../../store/actions";

export default function Comics() {
  const [popularMarvel, setPopularMarvel] = useState();

  useEffect(() => {
    async function popularMarvell() {
      const res = await api.get(``);
      const response = res.data.data.results;
      setPopularMarvel(response)
    }
    popularMarvell();
  },[]);


  return (
    <Container>
      <HeaderComics />
      <BodyComics popularMarvel={popularMarvel} />
    </Container>
  );
}
