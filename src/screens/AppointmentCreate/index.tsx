import React from 'react';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';



export function AppointmentCreate() {
  const members = [
    {
      id: '1',
      username: 'DaniSan',
      avatar_url: 'https://github.com/DaniSanT17.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Kasakiro',
      avatar_url: 'https://github.com/CarlosSSilva.png',
      status: 'offline',
    }
  ]


  return (
    <Background>
      <Header title="Detalhes" />

    </Background>
  );
}
