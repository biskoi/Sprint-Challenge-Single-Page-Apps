import React from 'react';
import {
  Card as strapCard, CardImg as strapImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const Card = styled(strapCard)`
display: flex;
flex-direction: column;
border: solid black 2px;
margin: 3%;
text-decoration: none;
color: black;
`;

const CardImg = styled(strapImg)`
width: 100%;
// margin: 3%;
`;



export default function CharacterCard(props) {

  const {charID} = useParams();

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
