import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

import api from "../../../store/actions";

export const BodyComics = () => {
  
  useEffect(() => {
    async function comics() {
      const response = await api.get(``);
      console.log(response.data.data.results, "response");
    }
    comics();
  }, []);

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
