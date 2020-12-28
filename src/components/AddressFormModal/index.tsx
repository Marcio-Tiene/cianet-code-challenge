import React from 'react';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';
import {
  AddressFormArticle,
  AddressFormHeader,
  ModalBackground,
} from './styles';
import { CgCloseO } from 'react-icons/cg';
import AddressForm from '../AddresForm';

const AddressFormModal: React.FC = () => {
  const { isAddressFormOpen, setIsAddressFormOpen } = AddressFormModalHandler();
  const HandleCloseClick = () => setIsAddressFormOpen(false);

  return (
    <ModalBackground show={isAddressFormOpen}>
      <AddressFormArticle className='animate'>
        <AddressFormHeader>
          <h2>Informe aqui seu endereço</h2>
          <span onClick={HandleCloseClick}>
            <CgCloseO color='var(--text-in-primary)' size={25} />
          </span>
        </AddressFormHeader>
        <AddressForm />
      </AddressFormArticle>
    </ModalBackground>
  );
};

export default AddressFormModal;
