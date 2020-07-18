import React from "react";
import styled, { css, cx } from "react-emotion";
import { SSE_WHITE, SSE_GREY, SSE_LIGHT_GREEN } from "../../constants";
const Wrap = styled("div")`
  @media (max-width: 992px) {
    display: none;
  }
  flex: 1;
  padding: 1.2rem;
  background: ${SSE_WHITE};
  max-width: 25rem;
  margin-left: 10rem;
  @media (min-width: 993px) and (max-width: 1100px) {
    margin-left: 3rem;
    width: 25rem;
  }
  @media (min-width: 1441px) {
    margin-left: 15rem;
    width: 25rem;
    flex: 2;
  }
`;
const Heading = styled("div")`
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
`;
const List = styled("div")`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const Item = styled("li")`
  padding: 1.2rem 0;
  font-size: 1.2rem;
  border-bottom: 0.5px solid ${SSE_GREY};
`;
function Categories({ menus, activeMenu, onSelectMenu }) {
  const constructItems = () => {
    return menus.map((m, index) => (
      <Item
        key={`fixed-menu-${m.menu}-${index}`}
        className={cx(
          index === menus.length - 1
            ? css`
                border: none;
              `
            : "",
          activeMenu === index
            ? css`
                color: ${SSE_LIGHT_GREEN};
              `
            : "",
        )}
        onClick={() => onSelectMenu(index)}
      >
        {m.menu}
      </Item>
    ));
  };
  return (
    <Wrap>
      <Heading>Categories</Heading>
      <List>{constructItems()}</List>
    </Wrap>
  );
}
export default Categories;
