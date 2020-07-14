import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";
import { CloseIcon } from "../SpriteImage";
import { WC_BLUE } from "../../constants";
const NavWrap = styled("div")`
  padding: 0;
  @media (min-width: 993px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    position: fixed;
    overflow-x: hidden;
    left: 0;
    padding-bottom: 130px;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.28, 0, 0.18, 1);
    background: #ffffff;
    top: 0;
    transform: ${(props) =>
      props.isNavMenuVisible ? "translateX(0%)" : "translateX(-150%)"};
  }
`;
const CloseIconWrap = styled("div")`
  height: 6.4rem;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
`;
// const CloseIcon = styled('span')`
//   font-size: 2rem;
// `;
const ListItem = styled("li")`
  height: 5.2rem;
  border-bottom: 1px solid #000000;
  color: #000000;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
`;
export default class NavBar extends React.Component {
  constructMenus = () => {
    const { menus, activeMenu, onMenuSelect = () => {} } = this.props;
    const keys = Object.keys(menus);
    return keys.map((k) => {
      const { heading, hoverState } = menus[k];
      const isActive = activeMenu.name === heading;
      return (
        <ListItem
          id={heading}
          key={heading}
          onClick={() => onMenuSelect({ heading })}
          className={
            isActive || hoverState
              ? css`
                  color: ${WC_BLUE};
                `
              : ""
          }
        >
          {heading}
        </ListItem>
      );
    });
  };
  render() {
    const { isNavMenuVisible = false, closeNavMenu = () => {} } = this.props;
    return (
      <NavWrap isNavMenuVisible={isNavMenuVisible}>
        {/* close icon */}
        <CloseIconWrap>
          <CloseIcon
            className={css`
              top: 13px;
              position: absolute;
            `}
            onClick={closeNavMenu}
          />
        </CloseIconWrap>
        {this.constructMenus()}
      </NavWrap>
    );
  }
}
NavBar.propTypes = {
  isNavMenuVisible: PropTypes.bool,
  closeNavMenu: PropTypes.func,
  menus: PropTypes.Object,
  activeMenu: PropTypes.object,
  onMenuSelect: PropTypes.func,
};
