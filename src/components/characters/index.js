import React from "react";


import {
  Container,
  TitleCategoryCharacters,
  ImageCharactersBody,
  ScrollingImageCharacters,
  BackgroundBody
} from "./styles";


export const Characters = () => {
  return (
    <>
     <TitleCategoryCharacters>Os personagens mais importantes</TitleCategoryCharacters>
      <Container>
        <ScrollingImageCharacters>
          <ImageCharactersBody></ImageCharactersBody>
        </ScrollingImageCharacters>
      </Container>
    </>
  );
};
