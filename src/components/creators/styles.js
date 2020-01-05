import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleCategoryCreator = styled.div`
  color: #ffffff;
  padding: 0 0 10px 0;
  margin-top: 20px;
`;

export const ScrollingImageComics = styled.div`
  display: flex;
`;

export const FrameBodyCreator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
  height: 200px;
  width: 140px;
  border: 1px solid #333;
   h2 {
    color: #9e9e9e;
  }
`;

export const BackgroundBody = styled.div`
  background-color: #222;
  width: 100%;
  height: 100%;
`;
