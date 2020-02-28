import React from "react";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
border: solid black 2px;
margin: 3%;
`;

export default function CharacterCard(props) {

  return (
    <Container>
      <p>ID: {props.char.id}</p>
      <p>Name: {props.char.name}</p>
    </Container>
  );

}
