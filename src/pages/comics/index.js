import React from "react";

import { Container } from './styles';

import { HeaderComics } from "./HeaderComics";
import { BodyComics } from './BodyComics';

export default function comics() {
  return (
    <Container>
      <HeaderComics />
      <BodyComics />
    </Container>
  );
}
