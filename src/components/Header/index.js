import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Wrap = styled("div")`
  background: #fff;
  display: flex;
  height: 4.4rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 4px 0px #f9f9fa;
`;
const Hamburger = styled("div")`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1rem;
  @media (min-width: 993px) {
    display: none;
  }
`;
const HamburgerLine = styled("span")`
  width: 15px;
  height: 1px;
  margin: 0.2rem;
  background: #000;
`;
const Logo = styled("div")`
  position: absolute;
  left: 3.5rem;
  @media (min-width: 993px) {
    left: 5rem;
  }
`;
export default class Header extends React.Component {
  render() {
    return (
      <Wrap>
        <Hamburger onClick={this.props.openNavMenu}>
          {Array(3)
            .fill(0)
            .map((l) => (
              <HamburgerLine />
            ))}
        </Hamburger>
        <Logo>Sivasaki</Logo>
      </Wrap>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object,
};
