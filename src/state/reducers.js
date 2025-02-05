import * as types from "./actionTypes";

const additionalPrice = 0;
const car = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};
const store = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

export function carReducer(state = car, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return {
        ...state,
        features: [...state.features, action.payload],
        price: state.price + action.payload.price
      };
    case types.REMOVE_FEATURE:
      return {
        ...state,
        features: state.features.filter(item => item.id !== action.payload.id),
        price: state.price - action.payload.price
      };
    default:
      return state;
  }
}
export function additionalPriceReducer(state = additionalPrice, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function storeReducer(state = store, action) {
  switch (action.type) {
    default:
      return state;
  }
}
