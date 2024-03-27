import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HousesService {
  createHouse(houseData) {
    console.log('3 🏡🏡', houseData);
    const createdHouse = new House(houseData)
    console.log('new house ', createdHouse);
    AppState.houses.push(createdHouse)
    this.saveHouses()
  }

  saveHouses() {
    let dataString = JSON.stringify(AppState.houses)
    localStorage.setItem('houses', dataString)
  }

  loadHouses() {
    let dataString = localStorage.getItem('houses')
    const housesData = JSON.parse(dataString)
    console.log(" 1b:we've made it this far");

    if (housesData == null) return

    const houses = housesData.map(house => new House(house))
    AppState.houses = houses

  }

  removeHouses(houseData) {

    let indexToDelete = AppState.houses.find(house => house.id == houseData.id)
    console.log(indexToDelete);
  }






}


export const houseServices = new HousesService()