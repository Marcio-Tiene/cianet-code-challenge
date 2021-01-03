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
import { GetUserCoords } from '../../services/api';
import UserCoordsHook from '../../hooks/UserCoordsHook';
import { confirmInstalation } from '../../services/DistanceFormula';

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
  const { setUserCoords, setZoom } = UserCoordsHook();
  const { setIsAddressFormOpen } = AddressFormModalHandler();
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleClose = () => setIsAddressFormOpen(false);

  const handleSubmit: SubmitHandler<IAddressFormData> = async (data) => {
    setIsLoading(true);
    try {
      await AddressFormValidation(data);

      const formatedQueryString = FormatedQueryString(data);
      const userCoords = await GetUserCoords(formatedQueryString);
      setUserCoords(userCoords);

      setZoom(18);
      const viability = confirmInstalation(userCoords as number[]);
      console.log(viability);

      handleClose();
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

        setIsLoading(false);

        if (formRef.current) formRef.current.setErrors(validationErrors);
      } else {
        console.error(err.message);
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
        <Button disabled={isLoading}>
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
