import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Wrap = styled("div")`
  background: white;
  display: flex;
  height: 6.4rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  color: #000000;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 4px 0px #f9f9fa;
  @media (max-width: 992px) {
    height: 4.4rem;
  }
`;


export default class Header extends React.Component { 
  render() {
    return (
      <Wrap>
       I am header
      </Wrap>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object,
 
};
