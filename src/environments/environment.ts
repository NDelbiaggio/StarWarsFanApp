// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiRoot = "https://swapi.dev/api/";

export const environment = {
  production: false,
  api: {
    resources: `${apiRoot}`,
    people: `${apiRoot}people`,
    planets: `${apiRoot}planets`,
    films: `${apiRoot}films`,
    species: `${apiRoot}species`,
    vehicles: `${apiRoot}vehicles`,
    starships: `${apiRoot}starships`,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
