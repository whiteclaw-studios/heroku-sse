import React from "react";
import styled, { css } from "react-emotion";
import Modal from "../Modal";
import Input from "../Input";
import { SSE_LIGHT_GREEN, SSE_WHITE } from "../../constants";
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
      hoveredOnButton: false,
    };
  }
  onValueChange = (args) => {
    this.setState({ ...args });
  };
  render() {
    return (
      <Modal close={this.props.closeForm}>
        <Wrap>
          <Heading>Booking details</Heading>
          <Inputs>
            <EmailWrap>
              <Input
                name="email"
                state={this.state.email}
                onValueChange={this.onValueChange}
                placeholder="Your email id"
              />
            </EmailWrap>
            <MobileWrap>
              <Input
                name="mobile"
                state={this.state.mobile}
                onValueChange={this.onValueChange}
                placeholder="Your mobile number"
              />
            </MobileWrap>
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
                onClick={() => {}}
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
