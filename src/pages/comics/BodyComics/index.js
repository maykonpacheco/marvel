import React from "react";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

export const BodyComics = () => {
  return (
    <BackgroundBody>
      <TitleCategoryComics>Populares na Marvel</TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
          <ImageComicsBody></ImageComicsBody>
          <ImageComicsBody></ImageComicsBody>
          <ImageComicsBody></ImageComicsBody>
          <ImageComicsBody></ImageComicsBody>
        </ScrollingImageComics>
      </Container>
    </BackgroundBody>
  );
};
