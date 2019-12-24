import React from "react";
import { Element } from 'react-scroll';


import { Container, Title, Frame, Scrolling } from "./styles";

export const Body = () => {
  return (
    <Container>
      <Title>Populares na Marvel</Title>
      <Scrolling>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
      </Scrolling>
    </Container>
  );
};
