import * as Yup from 'yup';
import { IAddressFormData } from '../../components/AddresForm';

const cepTest = (value: string | undefined) => {
  if (!!value) {
    const normalizedCep = value.trim().split('-').join('');

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
    .required('Esse campo é obrigatório')
    .max(100, 'O Nome da rua deve ter no máximo 100 caracteres'),
  streetNumber: Yup.string()
    .required('Esse campo é obrigatório')
    .max(7, ' O nímero de ter no máximo 7 dígitos'),
  neighborhood: Yup.string()
    .required('Esse campo é obrigatório')
    .max(100, 'O Bairro deve ter no máximo 100 caracteres'),
  state: Yup.string()
    .required('Esse campo é obrigatório')
    .max(100, 'O estado deve ter no máximo 100 caracteres'),
  city: Yup.string()
    .required('Esse campo é obrigatório')
    .max(100, 'A cidade deve ter no máximo 100 caracteres'),
  postalCode: Yup.string()
    .required('Esse campo é obrigatório')
    .test('isCepValid', 'O cep deve conter 8 dígitos númericos', (value) =>
      cepTest(value)
    )
    .max(9, ' deve ter no máximo 9 caracteres'),
});

const AddressFormValidation = async (data: IAddressFormData) =>
  await schema.validate(data, { abortEarly: false });

export default AddressFormValidation;
