import React from "react";

import {
  Container,
  TitleCategoryCreator,
  FrameBodyCreator,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

export const Creators = () => {
  return (
    <>
      <TitleCategoryCreator>
        Seus criadores de quadrinhos favorito
      </TitleCategoryCreator>
      <Container>
        <ScrollingImageComics>
          <FrameBodyCreator>
            <h2>Jack Kirby</h2>
          </FrameBodyCreator>
        </ScrollingImageComics>
      </Container>
    </>
  );
};
