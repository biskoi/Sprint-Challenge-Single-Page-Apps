import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <Link to = '/characters'>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Link>
        <p>Click on Rick!</p>
      </Header>
    </section>
  );
}
