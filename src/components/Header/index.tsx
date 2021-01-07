import React from 'react';
import HeaderContainer from '../HeaderContainer';
import Logo from '../../assets/img/logo.png';
import { LogoImg, PageTitle } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt='Logo do provedor' />
      <PageTitle>Mapa de cobertura do Seu Provedor</PageTitle>
    </HeaderContainer>
  );
};

export default Header;
