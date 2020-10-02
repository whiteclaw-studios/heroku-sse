import React from "react";
import styled, { css } from "react-emotion";
import { SSE_WHITE, SSE_BLUE } from "../../constants";
const Wrap = styled("div")`
  margin: 1.2rem;
  position: relative;
  border: 1px solid #e9e9e9;
  background: #f9f9fa;
`;
const ImageWrap = styled("div")`
  min-width: 25rem;
  height: 20rem;
  @media (max-width: 992px) {
    min-width: 15rem;
  }
  ${(props) =>
    props.type === "BIG" &&
    css`
      min-width: 30rem;
      height: 30rem;
    `}
`;
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
  color: #000;
  left: 0.5rem;
`;
function Card({ imageUrl, type = "SMALL" }) {
  return (
    <Wrap>
      <ImageWrap type={type}>
        <Image src={imageUrl} />
      </ImageWrap>
      <DataWrap>
        <Tag>Most booked</Tag>
        {/* <Price>Service starting from $4</Price> */}
      </DataWrap>
    </Wrap>
  );
}
export default Card;
