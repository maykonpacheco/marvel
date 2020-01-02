import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

export const BodyComics = ({popularMarvel}) => {
  
  console.log(popularMarvel, "bsody")

  return (
    <BackgroundBody>
      <TitleCategoryComics>Populares na Marvel</TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
        <ImageComicsBody></ImageComicsBody>


        </ScrollingImageComics>
      </Container>
    </BackgroundBody>
  );
};
