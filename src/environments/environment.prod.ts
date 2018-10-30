
const apiRoot = "https://swapi.co/api/";

export const environment = {
  production: true,
  api: {
    resources: `${apiRoot}`,
    people: `${apiRoot}people`,
    planets: `${apiRoot}planets`,
    films: `${apiRoot}films`,
    species: `${apiRoot}species`,
    vehicles: `${apiRoot}vehicles`,
    starships: `${apiRoot}starships`,
  }
};
