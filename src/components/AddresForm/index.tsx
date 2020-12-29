import React, { useRef, useState, useEffect } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Form, Input, ButtonContainer } from './styles';
import Button from '../Button';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';
import LoadingSpiner from '../LoadingSpiner';
import FormHandlerRepository, {
  IState,
} from '../../Reposistories/FormhandlerRepository';
import AddressFormValidation from '../../services/FormValidation';
import axios from 'axios';
import { GetUserCoords } from '../../services/api';

export interface IAddressFormData {
  street: string;
  streetNumber: string;
  neighborhood: string;
  state: string;
  city: string;
  postalCode: string;
}

interface ICity {
  id: number;
  nome: string;
}

const AddressForm: React.FC = () => {
  const {
    FindCities,
    FindStates,
    FormatedQueryString,
  } = new FormHandlerRepository();
  const { setIsAddressFormOpen } = AddressFormModalHandler();
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonIsDisabled, setIsButtonDisabled] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleClose = () => setIsAddressFormOpen(false);

  const handleSubmit: SubmitHandler<IAddressFormData> = async (data) => {
    setIsButtonDisabled(true);
    setIsLoading(true);
    try {
      await AddressFormValidation(data);

      const formatedQueryString = FormatedQueryString(data);
      console.log(formatedQueryString);
      const test = await GetUserCoords(formatedQueryString);

      // if (test.features[0].relevance < 0.6)
      //   throw new Error('Address not found');

      console.log(test);
      // console.log(test.features[0].geometry.coordinates);
      setIsButtonDisabled(false);
      setIsLoading(false);
    } catch (err) {
      let validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors = {
            ...validationErrors,
            [`${error.path}`]: error.message,
          };
        });

        setTimeout(() => {
          setIsButtonDisabled(false);
          setIsLoading(false);
        }, 3000);

        if (formRef.current) formRef.current.setErrors(validationErrors);
      } else {
        console.error(err.message);
        setIsButtonDisabled(false);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const statesResults = await FindStates();

      setStates(statesResults);
    })();
    // eslint-disable-next-line
  }, []);

  const HandleStatesChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const stateInitial = event.target.value.slice(-2);

    const citiesOfThisState = await FindCities(states, stateInitial);

    setCities(citiesOfThisState);
  };

  const setDatalistStates = (state: IState) => (
    <option key={`${state.id}`} value={`${state.name} - ${state.initials}`} />
  );

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input label='Rua/Av:' name='street' />
      <Input label='Número:' name='streetNumber' />
      <Input label='Bairro:' name='neighborhood' />
      <Input
        onChange={HandleStatesChange}
        label='Estado:'
        name='state'
        list='states'
        placeholder=' selecione o Estado'
      />
      <datalist id='states'>
        {states && states.map((state: IState) => setDatalistStates(state))}
      </datalist>
      <Input
        label='Cidade:'
        name='city'
        list='cities'
        placeholder=' selecione a cidade'
        disabled={!cities.length}
      />
      <datalist id='cities'>
        {cities &&
          cities.map((city: ICity) => (
            <option key={`${city.id}`} value={`${city.nome}`} />
          ))}
      </datalist>

      <Input label='Cep:' name='postalCode' />
      <ButtonContainer>
        <Button as='span' onClick={handleClose} className='secondary-neutral'>
          Cancelar
        </Button>
        <Button disabled={isButtonIsDisabled}>
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
