import React from 'react';

import { MdNotificationsNone, MdMoreVert } from 'react-icons/md';

import { Container, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <h1>Pipefy</h1>
        <h3>Projeto de E-commerce</h3>
      </div>

      <Profile>
        <MdNotificationsNone size={30} />
        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Lucas Massi"/>
        <MdMoreVert size={30} />
      </Profile>
    </Container>
  );
}
