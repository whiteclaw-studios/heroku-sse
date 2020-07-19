import React from "react";
import styled from "react-emotion";
import Categories from "../Categories";
import {
  CATEGORIES,
  SSE_LIGHT_GREEN,
  SSE_WHITE,
  SSE_RED,
} from "../../constants";
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

const ToasterContainer = styled("div")`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 2001;
`;
const Toaster = styled("div")`
  position: absolute;
  bottom: -100px;
  transition: all 2s ease-in-out;
  padding: 1rem;
  ${(props) => (props.animate ? "bottom:100px;opacity:1" : "opacity:0")};
  background: ${SSE_WHITE};
  background: ${(props) =>
    props.type === "Success" ? SSE_LIGHT_GREEN : SSE_RED};
  color: ${SSE_WHITE};
`;
export default class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavmenu: false,
      showForm: false,
      activeMenu: 0,
      toaster: {
        show: false,
        message: "",
        type: "",
      },
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called", prevState, this.state);

    if (
      !prevState.toaster.show &&
      prevState.toaster.show !== this.state.toaster.show
    ) {
      console.log("componentDidUpdate called");
      setTimeout(() => {
        this.setState({
          toaster: {
            ...this.state.toaster,
            show: false,
          },
        });
      }, 3000);
    }
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
  showToaster = (message, showForm, type) => {
    console.log("showToaster called", message, showForm, type);
    this.setState({
      toaster: {
        ...this.state.toaster,
        show: true,
        message,
        type,
      },
      showForm,
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
        {this.state.showForm && (
          <Form closeForm={this.closeForm} showToaster={this.showToaster} />
        )}
        <ToasterContainer>
          <Toaster
            animate={this.state.toaster.show}
            type={this.state.toaster.type}
          >
            {this.state.toaster.message}
          </Toaster>
        </ToasterContainer>
      </Container>
    );
  }
}
