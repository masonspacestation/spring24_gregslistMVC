import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HousesService {
  createHouse(houseData) {
    console.log('Houses Service in the house');
    console.log('🏡🏡', houseData);

  }
}


export const houseServices = new HousesService()