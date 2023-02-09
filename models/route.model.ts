//import path from "path";

// export enum Routes { // puede ser const en vez de enum
//   HOME ='/',
//   CHARACTERS = "information/characters",
//   LOCATIONS = "information/locations",
// }

export interface Route {
  path: string;
  name: string;
}

export const Routes = {
  HOME: {
    path: "/",
    name: "Home",
  },
  CHARACTERS: {
    path: "information/characters",
    name: "Characters",
  },
  LOCATIONS: {
    path: "information/locations",
    name: "Locations",
  },
};
