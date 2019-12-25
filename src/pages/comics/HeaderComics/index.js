import React from "react";

import { Container, Logo } from "./styles";

import logo from "../../../assets/marvel.jpeg";

export const HeaderComics = () => {
  return (
    <Container>
      <Logo soucer={logo} />
    </Container>
  );
};
