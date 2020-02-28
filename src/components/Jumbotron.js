import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Rick and Morty Fan Page</h1>
          <p className="lead">Welcome to the ultimate Rick and Morty fan site!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;