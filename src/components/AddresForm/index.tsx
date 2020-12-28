import React, { useRef, useState, useEffect } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';

import { Form, Input, ButtonContainer } from './styles';
import Button from '../Button';
import AddressFormModalHandler from '../../hooks/AddressFormModalHandler';
import LoadingSpiner from '../LoadingSpiner';
import { IbgeApi } from '../../services/api';
import { IStates } from '../../interfaces/IIbege';

interface FormData {
  street: string;
  streetNumber: string;
  neighborhood: string;
  state: string;
  city: string;
  postalCode: string;
}

interface IState {
  name: string;
  initials: string;
  id: number;
}

interface ICity {
  id: number;
  nome: string;
}

const AddressForm: React.FC = () => {
  const { setIsAddressFormOpen } = AddressFormModalHandler();
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleClose = () => setIsAddressFormOpen(false);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    setIsLoading(true);

    console.log(data);
    setTimeout(() => setIsLoading(false), 10000);
  };

  useEffect(() => {
    (async (req, res) => {
      const result = await IbgeApi.get('?orderBy=nome');
      const statesName = result.data.map((state: IStates) => {
        return { name: state.nome, initials: state.sigla, id: state.id };
      });

      setStates(statesName);
    })();
  }, []);

  const HandleStatesChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const stateInitial = event.target.value.slice(-2);
    const statefind = states.find(
      (state: IState) => state.initials === stateInitial
    ) || { id: 0, name: '', initial: '' };
    if (!!statefind) {
      const citiesOfThisState = (
        await IbgeApi.get(`/${statefind.id}/municipios`)
      ).data;
      setCities(citiesOfThisState);
    }
  };

  const setDatalistStates = (state: IState) => (
    <option key={`${state.id}`} value={`${state.name} - ${state.initials}`} />
  );

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input label='Rua/Av:' name='street' />
      <Input label='Número:' name='streetNumer' />
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
