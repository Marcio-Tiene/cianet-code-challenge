import { IAddressFormData } from '../components/AddresForm';
import { IStates } from '../interfaces/IIbege';
import { IbgeApi } from '../services/api';

export interface IState {
  name: string;
  initials: string;
  id: number;
}

class FormHandlerRepository {
  FindCities = async (statesState: IState[], stateInitial: string) => {
    const statefind = statesState.find(
      (state: IState) => state.initials === stateInitial
    ) || { id: 0, name: '', initial: '' };

    const citiesOfThisState = (await IbgeApi.get(`/${statefind.id}/municipios`))
      .data;
    return citiesOfThisState;
  };

  FindStates = async () => {
    const result = await IbgeApi.get('?orderBy=nome');
    const states = result.data.map((state: IStates) => {
      return { name: state.nome, initials: state.sigla, id: state.id };
    });
    return states;
  };

  FormatPostalCode(postalCode: string) {
    const postalCodeNormalized = postalCode
      .trim()
      .split('')
      .filter((letter) => letter !== '-');
    return postalCodeNormalized.join('');
  }

  FormatedQueryString = (data: IAddressFormData) =>
    `${data.street}, ${data.streetNumber} - ${data.neighborhood}, ${
      data.city
    } - ${data.state.slice(-2)}, ${this.FormatPostalCode(data.postalCode)}`;
}

export default FormHandlerRepository;
