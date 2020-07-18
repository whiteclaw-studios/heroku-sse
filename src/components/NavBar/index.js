import React from "react";
import PropTypes from "prop-types";
import styled, { cx, css } from "react-emotion";
import { WC_BLUE, SSE_WHITE, SSE_LIGHT_GREEN } from "../../constants";
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
    background: ${SSE_WHITE};
    top: 0;
    transform: ${(props) =>
      props.isNavMenuVisible ? "translateX(0%)" : "translateX(-150%)"};
    z-index: 10;
  }
`;
const CloseIconWrap = styled("div")`
  height: 4.2rem;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
`;
const CloseIcon = styled("span")`
  font-size: 2rem;
`;
const ListItem = styled("li")`
  height: 5.2rem;
  border-bottom: 1px solid #000000;
  color: #000000;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
  font-size: 1.2rem;
`;
const Heading = styled("div")`
  font-weight: bold;
  font-size: 1.4rem;
  margin-left: 2rem;
`;
export default class NavBar extends React.Component {
  constructMenus = () => {
    const { menus, activeMenu, onSelectMenu } = this.props;
    return menus.map((m, index) => (
      <ListItem
        key={`nav-menu-${m.menu}-${index}`}
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
      </ListItem>
    ));
  };
  render() {
    const { isNavMenuVisible = true, closeNavMenu = () => {} } = this.props;
    return (
      <NavWrap isNavMenuVisible={isNavMenuVisible}>
        {/* close icon */}
        <CloseIconWrap>
          <CloseIcon
            className={css`
              position: absolute;
            `}
            onClick={closeNavMenu}
          >
            X
          </CloseIcon>
          <Heading>Categories</Heading>
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
