import React from "react";
import styled from "react-emotion";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";
import "../../../globalStyles";
import Header from "../Header";
import { SSE_GREY } from "../../constants";
const Wrap = styled("div")`
  background: ${SSE_GREY};
  height: 100%;
`;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavMenuVisible: false,
    };
  }
  showNavMenu = () => {
    this.setState({
      isNavMenuVisible: true,
    });
  };
  closeNavMenu = () => {
    this.setState({
      isNavMenuVisible: false,
    });
  };

  render() {
    const { route = {} } = this.props;
    const { isNavMenuVisible } = this.state;
    return (
      <Wrap>
        {/* <Header
          {...this.props}
          showNavMenu={this.showNavMenu}
          closeNavMenu={this.closeNavMenu}
          isNavMenuVisible={isNavMenuVisible}
        /> */}
        {renderRoutes(route.routes, { ...this.props })}
      </Wrap>
    );
  }
}
App.propTypes = {
  route: PropTypes.object,
};
