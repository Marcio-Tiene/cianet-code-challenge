import axios from 'axios';

export const IbgeApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
});

export const GetUserCoords = async (userAddress: string) => {
  const response = (
    await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${userAddress}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}
    `
    )
  ).data;

  const coords = [
    response.features[0].geometry.coordinates[1],
    response.features[0].geometry.coordinates[0],
  ];

  if (response.features[0].relevance < 0.6) {
    throw new Error(
      'Endereço não encontrado, verifique o cada dado do formulario e tente novamente'
    );
  }
  return coords;
};
