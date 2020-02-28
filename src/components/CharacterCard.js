import React from 'react';
import {
  Card as strapCard, CardImg as strapImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components';

const Card = styled(strapCard)`
display: flex;
flex-direction: column;
border: solid black 2px;
margin: 3%;
`;

const CardImg = styled(strapImg)`
width: 100%;
// margin: 3%;
`;



export default function CharacterCard(props) {

  return (
    <Card>
      <CardImg top width="100%" src={props.char.image} alt="Card image cap" />
      <p>Specimen ID: {props.char.id}</p>
      <p>Name: {props.char.name}</p>
      <p>Species: {props.char.species}</p>
      <p>Status: {props.char.status}</p>
    </Card>
  );

}
