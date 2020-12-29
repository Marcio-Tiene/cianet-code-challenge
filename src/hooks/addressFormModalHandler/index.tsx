import { useContext } from 'react';
import {
  DialoContext,
  SetIsAddressFormOpen,
} from '../../contexts/DialagsContext';

const AddressFormModalHandler = () => {
  const { isAddressFormOpen } = useContext(DialoContext);
  const setIsAddressFormOpen = useContext(
    SetIsAddressFormOpen
  ) as React.Dispatch<React.SetStateAction<boolean>>;

  return { isAddressFormOpen, setIsAddressFormOpen };
};

export default AddressFormModalHandler;
