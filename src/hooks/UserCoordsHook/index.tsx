import { useContext } from 'react';
import {
  SetUserCoords,
  SetZoom,
  UserCoorContext,
} from '../../contexts/UserCoordsContext';

const UserCoordsHook = () => {
  const { zoom, userCoords } = useContext(UserCoorContext);
  const setUserCoords = useContext(SetUserCoords) as React.Dispatch<
    React.SetStateAction<number[]>
  >;

  const setZoom = useContext(SetZoom) as React.Dispatch<
    React.SetStateAction<number>
  >;

  return { userCoords, setUserCoords, zoom, setZoom };
};

export default UserCoordsHook;
