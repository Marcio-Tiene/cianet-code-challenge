import React, { memo } from 'react';
import Button from '../Button';
import FooterContainer from '../FooterContainer';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Button>Veja se há possibilidade de instalação no seu endereço</Button>
    </FooterContainer>
  );
};

export default memo(Footer);
