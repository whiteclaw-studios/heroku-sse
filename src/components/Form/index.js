import React from "react";
import styled, { css } from "react-emotion";
import Modal from "../Modal";
import Input from "../Input";
import requestWrapper from "../../utils/requestWrapper";
import {
  SSE_LIGHT_GREEN,
  SSE_WHITE,
  ADDRESS_CANNOT_BE_EMPTY,
  SSE_RED,
  INVALID_NAME,
  INVALID_EMAIL,
  INVALID_MOBILE,
} from "../../constants";
const Wrap = styled("div")`
  margin: 1.2rem 2.4rem;
`;
const Heading = styled("div")`
  font-weight: bold;
  font-size: 1.6rem;
`;
const Inputs = styled("div")`
  width: 40rem;
  @media (max-width: 560px) {
    width: 25rem;
  }
`;
const NameWrap = styled("div")`
  margin: 1.6rem 0;
`;
const EmailWrap = styled("div")`
  margin: 1.6rem 0;
`;
const MobileWrap = styled("div")`
  margin: 1.6rem 0;
`;
const ButtonWrap = styled("div")`
  flex: 1;
  max-width: 40rem;
  text-align: left;
  margin-top: 2.4rem;
  @media (max-width: 560px) {
    max-width: unset;
    width: 100%;
  }
`;
const BookNow = styled("button")`
  color: ${SSE_LIGHT_GREEN};
  outline: none;
  border: 1px solid ${SSE_LIGHT_GREEN};
  background: ${SSE_WHITE};
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 993px) {
    width: 18rem;
  }
  @media (max-width: 992px) {
    cursor: default;
  }
  @media (max-width: 560px) {
    margin-top: 1rem;
    width: 100%;
  }
`;
const AddressWrap = styled("div")`
  margin: 2.4rem 0 0;
  border: 1px solid ${SSE_LIGHT_GREEN};
`;
const Address = styled("textarea")`
  width: 39rem;
  height: 10rem;
  border: none;
  outline: none;
  padding: 0.5rem;
  @media (max-width: 560px) {
    width: 24rem;
  }
`;
const ErrorSpan = styled("span")`
  color: ${SSE_RED};
  font-size: 1.2rem;
  margin-top: 1.2rem;
  font-family: "Montserrat", sans-serif;
`;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        error: false,
        dirty: false,
        type: "email",
      },
      mobile: {
        value: "",
        error: false,
        dirty: false,
        type: "mobile",
      },
      name: {
        value: "",
        error: false,
        dirty: false,
        type: "name",
      },
      address: {
        value: "",
        error: false,
        dirty: false,
      },
      hoveredOnButton: false,
    };
  }
  onValueChange = (args) => {
    this.setState({ ...args });
  };
  onChangeAddress = (e) => {
    const state = {
      value: e.target.value,
    };
    state.dirty = true;
    state.error = state.value.length <= 0;

    this.setState({
      address: {
        ...state,
      },
    });
  };
  onSubmit = () => {
    const { email, name, mobile, address } = this.state;
    let flag = false;
    if (mobile.value.length <= 0) {
      flag = true;
      this.setState({
        mobile: {
          ...this.state.mobile,
          error: true,
        },
      });
    }
    if (address.value.length <= 0) {
      flag = true;

      this.setState({
        address: {
          ...this.state.address,
          error: true,
        },
      });
    }
    console.log(
      "------",
      !flag,
      !email.error,
      !name.error,
      !mobile.error,
      !address.error,
    );
    if (
      !flag &&
      !email.error &&
      !name.error &&
      !mobile.error &&
      !address.error
    ) {
      requestWrapper({
        url: "http://localhost:8080/sendMail",
        method: "post",
        data: {
          email: email.value,
          mobile: mobile.value,
          name: name.value,
          address: address.value,
        },
      }).then((res) => {
        console.log("res", res);
      });
    }
  };
  render() {
    console.log("state", this.state);
    return (
      <Modal close={this.props.closeForm}>
        <Wrap>
          <Heading>Booking details</Heading>
          <Inputs>
            <NameWrap>
              <Input
                name="name"
                state={this.state.name}
                onValueChange={this.onValueChange}
                placeholder="Your name"
                allowIsEmpty
                showError={this.state.name.error}
                errorText={INVALID_NAME}
              />
            </NameWrap>
            <EmailWrap>
              <Input
                name="email"
                state={this.state.email}
                onValueChange={this.onValueChange}
                placeholder="Your email id"
                allowIsEmpty
                showError={this.state.email.error}
                errorText={INVALID_EMAIL}
              />
            </EmailWrap>
            <MobileWrap>
              <Input
                name="mobile"
                state={this.state.mobile}
                onValueChange={this.onValueChange}
                placeholder="Your mobile number"
                showError={this.state.mobile.error}
                errorText={INVALID_MOBILE}
              />
            </MobileWrap>
            <AddressWrap>
              <Address
                name="address"
                placeholder="Your address"
                onChange={this.onChangeAddress}
                value={this.state.address.value}
              ></Address>
            </AddressWrap>
            {this.state.address.error && (
              <ErrorSpan>{ADDRESS_CANNOT_BE_EMPTY} </ErrorSpan>
            )}
            <ButtonWrap>
              <BookNow
                className={
                  this.state.hoveredOnButton
                    ? css`
                        background: ${SSE_LIGHT_GREEN};
                        color: ${SSE_WHITE};
                      `
                    : ""
                }
                onMouseOver={() => this.setState({ hoveredOnButton: true })}
                onMouseLeave={() => this.setState({ hoveredOnButton: false })}
                onClick={this.onSubmit}
              >
                Submit
              </BookNow>
            </ButtonWrap>
          </Inputs>
        </Wrap>
      </Modal>
    );
  }
}
