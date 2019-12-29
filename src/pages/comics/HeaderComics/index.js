import React, {useEffect} from "react";

import { Container, Logo } from "./styles";

import { ROOT_URL } from '../../../services';

import logo from "../../../assets/marvel.png";

export const HeaderComics = () => {
  
  useEffect(() => {
   
  }, []);

  return (
    <Container>
     {console.log(ROOT_URL)}
      <Logo src={logo} />
    </Container>
  );
};
