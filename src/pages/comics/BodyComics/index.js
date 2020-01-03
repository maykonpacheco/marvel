import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

export const BodyComics = ({ popularMarvel }) => {
  console.log(popularMarvel, "bsody");

  return (
    <BackgroundBody>
      <TitleCategoryComics>Populares na Marvel</TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
          {popularMarvel.map((data, index) => (
            <ImageComicsBody
              key={index}
              src={data.thumbnail.path + '.' + data.thumbnail.extension}
              
          ></ImageComicsBody>
          
          ))}
        </ScrollingImageComics>
      </Container>
    </BackgroundBody>
  );
};
