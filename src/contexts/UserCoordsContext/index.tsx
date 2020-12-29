import React, { createContext, useState } from 'react';

const UserCoorContext = createContext({
  userCoords: [-27.591321, -48.513793],
  zoom: 14,
});
const SetUserCoords = createContext<null | React.Dispatch<
  React.SetStateAction<number[]>
>>(null);

const SetZoom = createContext<null | React.Dispatch<
  React.SetStateAction<number>
>>(null);

const UserCoordsProvider: React.FC = ({ children }) => {
  const [userCoords, setUserCoords] = useState([-27.591321, -48.513793]);
  const [zoom, setZoom] = useState(14);

  return (
    <UserCoorContext.Provider value={{ userCoords: userCoords, zoom: zoom }}>
      <SetUserCoords.Provider value={setUserCoords}>
        <SetZoom.Provider value={setZoom}>{children}</SetZoom.Provider>
      </SetUserCoords.Provider>
    </UserCoorContext.Provider>
  );
};

export { SetUserCoords, SetZoom, UserCoorContext, UserCoordsProvider };
