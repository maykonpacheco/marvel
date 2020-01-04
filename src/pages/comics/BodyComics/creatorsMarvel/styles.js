import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: scroll;
  white-space: nowrap;

 ::-webkit-scrollbar {
    display: none;
  }
  
`;

export const TitleCategoryComics = styled.div`
  color: #ffffff;
  padding: 0 0 10px 0;
  margin-top: 10px;
`;

export const ScrollingImageComics = styled.div`
  display: flex; 
`;

export const ImageComicsBody = styled.img`
  margin: 1px;
  height: 200px;
  width: 140px;
`;

export const BackgroundBody = styled.div`
  background-color: #222;
  width: 100%;
  height: 100%;
  padding: 10px;
`;