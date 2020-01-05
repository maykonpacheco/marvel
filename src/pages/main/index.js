import React from "react";

import { Container } from "./styles";

import { BodyMain } from "./Body";
import { HeaderMain } from "./Header";

export default function main() {
  return (
    <Container>
      <HeaderMain />
      <BodyMain />
    </Container>
  );
}
