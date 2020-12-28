import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';

import { Form, Input, ButtonContainer } from './styles';
import Button from '../Button';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';

interface FormData {
  name: string;
  email: string;
}

const AddressForm: React.FC = () => {
  const { setIsAddressFormOpen } = AddressFormModalHandler();
  const formRef = useRef<FormHandles>(null);

  const handleClose = () => setIsAddressFormOpen(false);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input label='Rua/Av:' name='name' />
      <Input label='Número:' name='email' />
      <ButtonContainer>
        <Button as='span' onClick={handleClose} className='secondary-neutral'>
          Cancelar
        </Button>
        <Button>Procurar</Button>
      </ButtonContainer>
    </Form>
  );
};

export default AddressForm;
