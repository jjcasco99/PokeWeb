// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Listapokemon = () => {

  // const [pokemons, setPokemons] = useState([]);
  //   // Emula a un ComponentDidMount pasando array vacío [] al final
  //   useEffect(() => {
  //     const getPokemons = async () =>{
  //         const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
  //         setPokemons(resp.data.results); // Guarda en estado [{},{},{}] de pokemons
  //     }
  //     getPokemons();
  //   },[]);

  return (
    <div>
      <form>
        <label htmlFor="pokemon">Introduce un pokemon:</label><br />
        <input type="text" id="pokemon" name="pokemon"/><br />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Listapokemon;
