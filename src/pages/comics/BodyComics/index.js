import React, { useEffect } from "react";

import { dataMain } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitleCategoryComics,
  ImageComicsBody,
  ScrollingImageComics,
  BackgroundBody
} from "./styles";

export const BodyComics = () => {
  let { comics } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dataMain(comics).then(res => {
      dispatch({
        type: "FETCH_CHARAC",
        data: res
      });
    });
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
