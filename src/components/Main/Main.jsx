import React from "react";
import Home from '../Home'
import Listapokemon from '../Listapokemon'
import Listapokemonbounce from '../Listapokemonbounce'

import {Route, Routes} from 'react-router-dom';

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lista" element={<Listapokemon />} />
          <Route path="/listabounce" element={<Listapokemonbounce />} />
        </Routes>
      </main>
  )
};

export default Main;
