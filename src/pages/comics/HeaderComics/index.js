import React from "react";

import { Container, Logo } from "./styles";

import logo from "../../../assets/marvel.png";



export const HeaderComics = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};
