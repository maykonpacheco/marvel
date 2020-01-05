import React, {useEffect} from "react";

import { Container, Logo } from "./styles";


import logo from "../../../assets/marvel.png";

export const HeaderMain = () => {

  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};
