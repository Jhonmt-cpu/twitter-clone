import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>João Mateus</h1>
        <h2>@joao_mateus</h2>

        <p>
          Student at <a href="https://reckectseat.com.br">@RocketSeat</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Patos de Minas, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 16 de Novembro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>670 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
}

export default ProfilePage;