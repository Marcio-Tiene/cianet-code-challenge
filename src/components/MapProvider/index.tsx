import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Logo from '../../assets/img/cianet-logo.png';
import PersonIcon from '../../assets/img/map-marker.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Postes from '../../utils/postes.json';
import UserCoordsHook from '../../hooks/UserCoordsHook';

const MapProvider: React.FC = () => {
  const [map, setMap] = useState<L.Map>();
  const cianetIcon = L.icon({
    iconUrl: Logo,
    iconSize: [25, 25],
  });
  const personIcon = L.icon({
    iconUrl: PersonIcon,
    iconSize: [25, 25],
  });

  const { userCoords, zoom } = UserCoordsHook();

  useEffect(() => {
    if (map) map.setView([userCoords[0], userCoords[1]], zoom);
  }, [userCoords, map, zoom]);

  const postes = Postes.unidades;

  const postesMarker = (lat: string, lng: string) => (
    <Marker
      key={`${lat}${lng}`}
      icon={cianetIcon}
      position={[Number(lat), Number(lng)]}
    />
  );

  const displayMap = useMemo(() => {
    console.log('hahaha');
    return (
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={[userCoords[0], userCoords[1]]}
        zoom={zoom}
        whenCreated={setMap}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}

          // url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {postes.map((poste) => postesMarker(poste.latitude, poste.longitude))}
        {!!userCoords && userCoords[0] !== -27.591321 && (
          <Marker icon={personIcon} position={[userCoords[0], userCoords[1]]} />
        )}
      </MapContainer>
    );
    // eslint-disable-next-line
  }, [userCoords, zoom, personIcon, postes]);

  return <div style={{ width: '100%', height: '100%' }}>{displayMap}</div>;
};

export default MapProvider;
