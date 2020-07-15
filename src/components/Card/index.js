import React from "react";
import styled from "react-emotion";
import testImage from "../../images/testImage.jpg";
import { SSE_WHITE, SSE_BLUE } from "../../constants";
const Wrap = styled("div")`
  margin: 1.2rem;
  position: relative;
`;
const ImageWrap = styled("div")``;
const Image = styled("img")`
  width: 100%;
  height: 100%;
`;
const DataWrap = styled("div")`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
const Tag = styled("span")`
  position: absolute;
  top: 1rem;
  color: ${SSE_WHITE};
  background: ${SSE_BLUE};
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.5rem;
  left: 0.5rem;
`;
const Price = styled("span")`
  font-size: 1.2rem;
  position: absolute;
  bottom: 2.5rem;
  color: ${SSE_WHITE};
  left: 0.5rem;
`;
function Card() {
  return (
    <Wrap>
      <ImageWrap>
        <Image src={testImage} />
      </ImageWrap>
      <DataWrap>
        <Tag>Most booked</Tag>
        <Price>Service starting from $4</Price>
      </DataWrap>
    </Wrap>
  );
}
export default Card;
