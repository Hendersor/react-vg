import React from "react";
import "./../styles/global.scss";
import { Filter } from "./Filter";
import { Videogames } from "./Videogames";
const App = () => {
  return (
    <div>
      <Filter />
      <Videogames />
    </div>
  );
};

export { App };
