import React from "react";
import styled, { css } from "react-emotion";
import Card from "../Card";
import { SSE_WHITE, SSE_GREY, SSE_LIGHT_GREEN } from "../../constants";
const Wrap = styled("div")`
  max-width: 70rem;
  margin: 0 5rem;
  background: ${SSE_WHITE};
  padding: 0 1.2rem;
  border-radius: 1.2rem;
  margin-bottom: 2.4rem;
  @media (min-width: 1300px) and (max-width: 1440px) {
    max-width: 90rem;
  }
  @media (max-width: 992px) {
    width: 100%;
    margin: 2rem;
    max-width: unset;
  }
  @media (min-width: 993px) and (max-width: 1100px) {
    max-width: 60rem;
    margin: 0 2rem;
  }
  @media (min-width: 1441px) {
    min-width: 90rem;
    max-width: unset;
    flex: 3;
  }
`;
const Heading = styled("div")`
  font-size: 1.6rem;
  margin: 1.2rem;
  font-weight: bold;
`;
const Row = styled("div")`
  display: flex;
  flex-direction: column;
`;
const Column = styled("div")`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Separator = styled("div")`
  width: 100%;
  height: 1px;
  background: ${SSE_GREY};
  border: 1px solid ${SSE_GREY};
`;
const GeneralContentWrap = styled("div")`
  display: flex;
  margin: 2.4rem 1.2rem;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
const GeneralContent = styled("div")`
  flex: 2;
`;
const ButtonWrap = styled("div")`
  flex: 1;
  max-width: 16rem;
  text-align: right;
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
  @media (max-width: 992px) {
    cursor: default;
  }
  @media (max-width: 560px) {
    margin-top: 1rem;
    width: 100%;
  }
`;
export default class IndividualService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredOnButton: false,
    };
  }
  render() {
    return (
      <Wrap>
        <Heading>AC repair and service</Heading>
        <Separator />
        <Row>
          <Column>
            <Card />
            <Card />
          </Column>
          <Column>
            <Card />
            <Card />
            <Card />
          </Column>
        </Row>
        <Separator />
        <GeneralContentWrap>
          <GeneralContent>
            At Mr. Right, our goal is customer satisfaction, while offering high
            quality professional repair services at a cost that’s affordable and
            competitive. Whether your AC is not cooling or needs a detailed
            servicing, Mr. Right provides quality workmanship through its
            pan-India network of skilled and verified AC repair professionals.
            Mr. Right offers a comprehensive range of AC repair services
            including AC gas refilling, AC servicing, AC installation and
            uninstallation, AC PCB repair, AC compressor repair, AC stabilizer
            installation…...pretty much any kind of repair work required on your
            AC.
          </GeneralContent>
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
              onClick={() => this.props.openForm()}
            >
              Book Now
            </BookNow>
          </ButtonWrap>
        </GeneralContentWrap>
      </Wrap>
    );
  }
}
