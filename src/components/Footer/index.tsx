import React, { memo } from 'react';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';
import Button from '../Button';
import FooterContainer from '../FooterContainer';

const Footer: React.FC = () => {
  const { setIsAddressFormOpen } = AddressFormModalHandler();
  return (
    <FooterContainer>
      <Button
        className='on-primary'
        onClickCapture={() => setIsAddressFormOpen(true)}
      >
        Veja se há possibilidade de instalação no seu endereço
      </Button>
    </FooterContainer>
  );
};

export default memo(Footer);
