import React, { memo } from 'react';
import HeaderContainer from '../components/HeaderContainer';
import Logo from '../assets/img/cianet-logo.png';
import { LogoImg, PageTitle } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt='Logo da cianet' />
      <PageTitle>Mapa de cobertura do Seu Provedor</PageTitle>
    </HeaderContainer>
  );
};

export default memo(Header);
