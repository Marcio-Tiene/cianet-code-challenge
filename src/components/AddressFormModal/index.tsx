import React from 'react';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';
import Button from '../Button';
import {
  AddressFormArticle,
  AddressFormHeader,
  ButtonContainer,
  ModalBackground,
} from './styles';

const AddressFormModal: React.FC = () => {
  const { isAddressFormOpen, setIsAddressFormOpen } = AddressFormModalHandler();

  return (
    <ModalBackground show={isAddressFormOpen}>
      <AddressFormArticle className='animate'>
        <AddressFormHeader>
          <h2>Informe aqui seu endereço</h2>
        </AddressFormHeader>
        dadaksdjhaskdjh
        <ButtonContainer>
          <Button
            onClickCapture={() => setIsAddressFormOpen(false)}
            className='secondary-neutral'
          >
            Cancelar
          </Button>
          <Button>Cadastrar</Button>
        </ButtonContainer>
      </AddressFormArticle>
    </ModalBackground>
  );
};

export default AddressFormModal;
