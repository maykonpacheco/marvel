import React from "react";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

export const creatorsMarvel = ({creatorsMarvel}) => {
  return (
    <BackgroundBody>
      <TitleCategoryComics>
        Maiores personagens de todos os tempos
      </TitleCategoryComics>
      <Container>
        <ScrollingImageComics>
          {creatorsMarvel.map((data, index) => (
            <ImageComicsBody
              key={index}
              src={data.thumbnail.path + "." + data.thumbnail.extension}
            ></ImageComicsBody>
          ))}
        </ScrollingImageComics>
      </Container>
    </BackgroundBody>
  );
};
