import React from 'react';
import {
  AddressFormArticle,
  AddressFormHeader,
  ModalBackground,
} from './styles';

interface IAddressFormModal {
  isOpen?: boolean;
}

const AddressFormModal: React.FC<IAddressFormModal> = ({ isOpen = false }) => {
  return (
    <ModalBackground show={isOpen}>
      <AddressFormArticle>
        <AddressFormHeader>
          <h3>Informe aqui seu endereço</h3>
        </AddressFormHeader>
        dadaksdjhaskdjh
      </AddressFormArticle>
    </ModalBackground>
  );
};

export default AddressFormModal;
