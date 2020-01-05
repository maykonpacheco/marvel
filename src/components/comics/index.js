import React from "react";


import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";


export const Comics = () => {
  return (
    <>
     <TitleCategoryComics>Quadrinhos mais populares</TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
          <ImageComicsBody></ImageComicsBody>
        </ScrollingImageComics>
      </Container>
    </>
  );
};
