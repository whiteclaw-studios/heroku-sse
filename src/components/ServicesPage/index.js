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
      activeMenu: 0,
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
  onSelectMenu = (index) => {
    this.setState({
      activeMenu: index,
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
          activeMenu={this.state.activeMenu}
          onSelectMenu={this.onSelectMenu}
        />
        <Categories
          menus={CATEGORIES}
          activeMenu={this.state.activeMenu}
          onSelectMenu={this.onSelectMenu}
        />
        <IndividualService
          openForm={this.openForm}
          activeService={CATEGORIES[this.state.activeMenu]}
        />
        {this.state.showForm && <Form closeForm={this.closeForm} />}
      </Container>
    );
  }
}
