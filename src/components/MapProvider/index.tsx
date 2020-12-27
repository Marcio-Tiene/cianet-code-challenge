import React, { memo } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Logo from '../../assets/img/cianet-logo.png';
import PersonIcon from '../../assets/img/map-marker.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Postes from '../../utils/postes.json';

interface IMapProvider {
  personMarker?: number[] | null;
  zoom?: number;
}

const MapProvider: React.FC<IMapProvider> = ({ personMarker, zoom = 15 }) => {
  const cianetIcon = L.icon({
    iconUrl: Logo,
    iconSize: [25, 25],
  });
  const personIcon = L.icon({
    iconUrl: PersonIcon,
    iconSize: [25, 25],
  });

  const postes = Postes.unidades;

  const postesMarker = (lat: string, lng: string) => (
    <Marker icon={cianetIcon} position={[Number(lat), Number(lng)]} />
  );

  return (
    <MapContainer
      center={
        personMarker
          ? [personMarker[0], personMarker[1]]
          : [-27.589889, -48.509639]
      }
      zoom={zoom}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}

      {postes.map((poste) => postesMarker(poste.latitude, poste.longitude))}
      {!!personMarker && (
        <Marker
          icon={personIcon}
          position={[personMarker[0], personMarker[1]]}
        />
      )}
    </MapContainer>
  );
};

export default memo(MapProvider);
