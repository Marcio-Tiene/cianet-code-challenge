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
  if (response.features[0].relevance < 0.6)
    throw new Error('Address not found');

  const coords = response.features[0].geometry.coordinates;
  return coords;
};
