import React from "react";
import styled from "react-emotion";
import MainSprite from "src/images/spriteImage.png";
const StyledSpan = styled("span")`
  background: url(${MainSprite});
  display: inline-block;
`;
function SpriteImage(props) {
  return <StyledSpan {...props} />;
}
export const HamburgerIcon = styled(SpriteImage)`
  background-position: -8px -43px;
  width: 18px;
  height: 16px;
`;
export const CloseIcon = styled(SpriteImage)`
  background-position: -8px -8px;
  width: 18px;
  height: 18px;
`;
export const MessageIcon = styled(SpriteImage)`
  background-position: -42px -8px;
  width: 18px;
  height: 18px;
`;
export const RightArrow = styled(SpriteImage)`
  background-position: -12px -76px;
  width: 10px;
  height: 18px;
`;
export const LeftArrow = styled(SpriteImage)`
  background-position: -46px -76px;
  width: 10px;
  height: 18px;
`;

export default SpriteImage;
