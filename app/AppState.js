import { Car } from './models/Car.js'
import { House } from "./models/House.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { generateId } from "./utils/GenerateId.js"
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  houses = [
    // new House()
    new House({
      id: generateId(),
      year: 1954,
      name: 'Riviera House',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1000,
      price: 100000,
      description: 'Nice regular house',
      imgUrl: 'https://photos.zillowstatic.com/fp/cc36b358a2f5f21b3a19e13757db57fd-p_e.jpg',
    }),
    new House({
      id: generateId(),
      year: 1985,
      name: 'Boise Mansion',
      bedrooms: 6,
      bathrooms: 6,
      sqft: 4000,
      price: 300000,
      description: "We're serious; it's a legit Mansion",
      imgUrl: 'https://www.weknowboise.com/uploads/shared/images/neighborhoods/boise-north-end-real-estate-and-homes-for-sale.jpg',
    }),
    new House({
      id: generateId(),
      year: 2020,
      name: 'Yurt',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 400,
      price: 20000,
      description: "You'll be yurtin for certain.",
      imgUrl: 'https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1666318389/campground-photos/hbpapt8atrf3xbn0os30.jpg',
    }),
  ]

  cars = [
    new Car({
      make: 'dodge',
      model: 'neon',
      year: 1996,
      color: 'orange',
      price: 200,
      mileage: 150000,
      automatic: true,
      imgUrl: 'https://www.carscoops.com/wp-content/uploads/2019/04/30bd62fe-2005-dodge-neon-srt4-bat-auction-60.jpg'
    }),
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1995,
      color: 'white',
      price: 20000,
      mileage: 200000,
      automatic: false,
      imgUrl: 'https://images.topgear.com.ph/topgear/images/2019/02/03/mazda-miata-mt1-1549188870.jpg'
    }),
  ]






}

export const AppState = createObservableProxy(new ObservableAppState())