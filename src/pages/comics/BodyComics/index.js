import React, { useEffect } from "react";

//import { useDispatch, useSelector } from "react-redux";

import creatorsMarvel from './creatorsMarvel';

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";


export const BodyComics = ({ comicsPopularMarvel, charactersMarvel }) => {

  return (
    <BackgroundBody>
      <TitleCategoryComics>Quadrinhos mais populares</TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
          {comicsPopularMarvel.map((data, index) => (
            <ImageComicsBody
              key={index}
              src={data.thumbnail.path + "." + data.thumbnail.extension}
            ></ImageComicsBody>
          ))}
        </ScrollingImageComics>
      </Container>
      <TitleCategoryComics>Maiores personagens de todos os tempos</TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
          {charactersMarvel.map((data, index) => (
            <ImageComicsBody
              key={index}
              src={data.thumbnail.path + "." + data.thumbnail.extension}
            ></ImageComicsBody>
          ))}
        </ScrollingImageComics>
      </Container>
      <creatorsMarvel />
    </BackgroundBody>
  );
};
