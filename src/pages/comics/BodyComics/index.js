import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

import api from '../../../store/actions';

export const BodyComics = () => {
  let { comics } = useSelector(state => state);
  const dispatch = useDispatch();

 
    const response = api.get(`/`);
    console.log(response, "/")
 
 
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
