import { AppState } from "../AppState.js";
import { houseServices } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";



export class HousesController {
  constructor() {
    console.log('houses controller loaded');
    // this.addHouse('this old house')
    this.drawhouse()
  }

  drawhouse() {
    console.log('🏡 drawing houses');
    const house = AppState.houses
    let housesHTML = ''
    house.forEach(house => { housesHTML += house.houseCard })
    console.log(housesHTML);

    const houseListElem = document.getElementById('houses-list')

    houseListElem.innerHTML += housesHTML
  }


  addHouse(record) {
    console.log('🏡 house added', record);
    // this will add the data to the AppState.houses array, then it will draw the array to the page with a second function here
    houseServices.createHouse(record)
    console.log('🏡🏡🏡 this new house', record);
  }







  //------------------------->>>>>>>  
}