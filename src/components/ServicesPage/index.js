import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  width: 100%;
  padding-top: 6.4rem;
  @media (max-width: 992px) {
    padding-top: 4.4rem;
  }
`;

export default class ServicesPage extends React.Component {
  render() {
    return (
      <Container>
        I am services page
      </Container>
    );
  }
}
