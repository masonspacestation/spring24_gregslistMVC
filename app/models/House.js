import { generateId } from "../utils/GenerateId.js"



export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = parseInt(data.year)
    this.name = data.name
    this.bedrooms = parseInt(data.bedrooms)
    this.bathrooms = parseInt(data.bathrooms)
    this.sqft = parseInt(data.sqft)
    this.price = parseInt(data.price)
    this.description = data.description
    this.imgUrl = data.imgUrl
    // this.jaccuzi = parseBool(value) // do this much later
  }

  get houseCard() {
    return `
    <div class="col-4 p-3">
    <div class="card">
      <img src="${this.imgUrl}" alt="house photo" class="card-img-top">
      <div class="card-body">
        <h3 class="card-title text-start">${this.name}</h3>
        <small>${this.description}</small>
        <div class="row justify-items-around align-items-middle">
          <div class="col-3 text-start p-3">
            <p class="card-text fw-bold"><i class="mdi mdi-bed-king-outline"></i>${this.bedrooms}</p>
          </div>
          <div class="col-3 text-start p-3">
            <p class="card-text fw-bold"><i class="mdi mdi-shower"></i>${this.bathrooms}</p>
          </div>
          <div class="col-6 text-start p-3">
          <p class="card-text fw-bold"><i class="mdi mdi-tape-measure"></i>${this.sqft} ft<sup>2</sup></p>
          </div>
          <div class="col-4 text-start">
            <button class="btn btn-primary rounded rounded-2" onclick="HousesController.removeHouse(${this.id})">$${this.price}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  }


}