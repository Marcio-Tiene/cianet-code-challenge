import React, { createContext, useState } from 'react';

const DialoContext = createContext({
  isAddressFormOpen: false,
});
const SetIsAddressFormOpen = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);

const DialogContexProvider: React.FC = ({ children }) => {
  const [isAddresformOpen, setIsAddressFormOpen] = useState(false);

  return (
    <DialoContext.Provider value={{ isAddressFormOpen: isAddresformOpen }}>
      <SetIsAddressFormOpen.Provider value={setIsAddressFormOpen}>
        {children}
      </SetIsAddressFormOpen.Provider>
    </DialoContext.Provider>
  );
};

export { DialogContexProvider, SetIsAddressFormOpen, DialoContext };
