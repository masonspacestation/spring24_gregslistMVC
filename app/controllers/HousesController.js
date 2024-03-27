import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { houseServices } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";



export class HousesController {
  constructor() {
    console.log('1a: houses controller loaded');
    houseServices.loadHouses()
    this.drawhouses()
    console.log("6 and we're back");
  }

  createHouse() {
    event.preventDefault()
    console.log('🏡 2 house added');

    let houseData = getFormData(event.target)
    houseServices.createHouse(houseData)
    event.target.reset()
    this.drawhouses()
  }

  drawhouses() {
    console.log('4 🏡 drawing houses');
    const house = AppState.houses
    let housesHTML = ''
    house.forEach(house => housesHTML += house.houseCard)
    console.log('5 ', housesHTML);

    const houseListElem = document.getElementById('houses-list')

    houseListElem.innerHTML = housesHTML
  }

  removeHouses(houseId) {
    console.log('removing',);
    houseServices.removeHouses(houseId)
    this.drawhouses()
  }





  //------------------------->>>>>>>  
}