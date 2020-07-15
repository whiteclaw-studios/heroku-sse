import React from "react";
import styled from "react-emotion";
import Card from "../Card";
import { SSE_WHITE } from "../../constants";
const Wrap = styled("div")`
  max-width: 70rem;
  margin: 0 5rem;
  background: ${SSE_WHITE};
  padding: 0 1.2rem;
  border-radius: 1.2rem;

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
export default class IndividualService extends React.Component {
  render() {
    return (
      <Wrap>
        <Heading>AC repair and service</Heading>
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
      </Wrap>
    );
  }
}
