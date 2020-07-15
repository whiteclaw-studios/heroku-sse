import React from "react";
import styled from "react-emotion";
import Categories from "../Categories";
import { CATEGORIES } from "../../constants";
import NavBar from "../NavBar";
import Header from "../Header";
import IndividualService from "../IndividualService";
import Form from "../Form";
const Container = styled("div")`
  width: 100%;
  padding-top: 8.4rem;
  @media (max-width: 992px) {
    padding-top: 4.4rem;
  }
  display: flex;
`;

export default class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavmenu: false,
      showForm: false,
    };
  }

  closeNavMenu = () => {
    this.setState({
      showNavmenu: false,
    });
  };
  openNavMenu = () => {
    this.setState({
      showNavmenu: true,
    });
  };
  openForm = () => {
    this.setState({
      showForm: true,
    });
  };
  closeForm = () => {
    this.setState({
      showForm: false,
    });
  };
  render() {
    return (
      <Container>
        {!this.state.showNavmenu && <Header openNavMenu={this.openNavMenu} />}
        <NavBar
          menus={CATEGORIES}
          isNavMenuVisible={this.state.showNavmenu}
          closeNavMenu={this.closeNavMenu}
        />
        <Categories menus={CATEGORIES} />
        <IndividualService openForm={this.openForm} />
        {this.state.showForm && <Form closeForm={this.closeForm} />}
      </Container>
    );
  }
}
