import React from 'react';
import { MdApps, MdContentPaste, MdEmail, MdGroupAdd } from 'react-icons/md'

import { Container } from './styles';

export default function MenuBar() {
  return (
    <Container>
      <button type="button" ><MdApps size={30} /></button>
      <button type="button" ><MdContentPaste size={30} /></button>
      <button type="button" ><MdEmail size={30} /></button>
      <button type="button" ><MdGroupAdd size={30} /></button>
    </Container>
  );
}
