import postesRepository from '../../utils/postes.json';
import { calcCrow } from './Formula';

class DistanceFormula {
  // Converts numeric degrees to radians

  confirmInstalation(userCoords: number[]) {
    const postes = postesRepository.unidades;
    const viablePoste = postes.find(
      (poste) =>
        calcCrow(
          userCoords[0],
          userCoords[1],
          Number(poste.latitude),
          Number(poste.longitude)
        ) < 150
    );

    if (!!viablePoste) {
      return true;
    } else {
      return false;
    }
  }
}

export default DistanceFormula;
