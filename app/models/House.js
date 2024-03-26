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
        <img src="${this.imgUrl}" alt="house photo"
          class="card-img-top">
        <div class="card-body">
          <h3 class="card-title text-start">${this.name}</h3>
          <p class="card-text fw-bold"><i class="mdi mdi-bed-king-outline"></i>${this.bedrooms}</p>
          <p class="card-text fw-bold"><i class="mdi mdi-shower"></i>${this.bathrooms}</p>
        </div>
      </div>
    </div>
  `
  }


}