import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';

import { Form, Input, ButtonContainer, DataList } from './styles';
import Button from '../Button';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';
import LoadingSpiner from '../LoadingSpiner';

interface FormData {
  street: string;
  streetNumber: string;
  neighborhood: string;
  state: string;
  city: string;
  postalCode: string;
}

const AddressForm: React.FC = () => {
  const { setIsAddressFormOpen } = AddressFormModalHandler();
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setIsAddressFormOpen(false);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    setIsLoading(true);

    console.log(data);
    setTimeout(() => setIsLoading(false), 10000);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input label='Rua/Av:' name='street' />
      <Input label='Número:' name='streetNumer' />
      <Input label='Estado:' name='state' list='states' />
      <datalist id='states'>
        <option value='auau' />
      </datalist>
      <Input label='Cep:' name='postalCode' />
      <ButtonContainer>
        <Button as='span' onClick={handleClose} className='secondary-neutral'>
          Cancelar
        </Button>
        <Button>
          {isLoading ? (
            <LoadingSpiner
              height='1rem '
              color='white'
              containerWidth='4.125rem'
            />
          ) : (
            'Procurar'
          )}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default AddressForm;
