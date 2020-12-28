import * as Yup from 'yup';
import { IAddressFormData } from '../../components/AddresForm';

const cepTest = (value: string | undefined) => {
  console.log(value);
  if (!!value) {
    const normalizedCep = value.trim().split('-').join('');
    console.log(normalizedCep);

    if (normalizedCep.length === 8 && !isNaN(Number(normalizedCep))) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const schema = Yup.object().shape({
  street: Yup.string()
    .required({ message: 'Esse campo é obrigatório' })
    .max(100, { message: 'O Nome da rua deve ter no máximo 100 caracteres' }),
  streetNumber: Yup.string()
    .required({ message: 'Esse campo é obrigatório' })
    .max(7, { message: ' O nímero de ter no máximo 7 dígitos' }),
  neighborhood: Yup.string()
    .required({ message: 'Esse campo é obrigatório' })
    .max(100, { message: 'O Bairro deve ter no máximo 100 caracteres' }),
  state: Yup.string()
    .required({ message: 'Esse campo é obrigatório' })
    .max(100, { message: 'O estado deve ter no máximo 100 caracteres' }),
  city: Yup.string()
    .required({ message: 'Esse campo é obrigatório' })
    .max(100, { message: 'A cidade deve ter no máximo 100 caracteres' }),
  postalCode: Yup.string()
    .required({ message: 'Esse campo é obrigatório' })
    .test('isCepValid', 'o cep deve conter 8 digitos numericos', (value) =>
      cepTest(value)
    )
    .max(9, { message: ' deve ter no máximo 9 caracteres' }),
});

const AddressFormValidation = async (data: IAddressFormData) =>
  await schema.validate(data, { abortEarly: false });

export default AddressFormValidation;
