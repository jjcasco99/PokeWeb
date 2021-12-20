import React, { useEffect, useState } from 'react';
import Cardlistbounce from './Cardlistbounce'
import axios from 'axios';
import { useDebounce } from "use-debounce";

const Listapokemonbounce = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const [debouncedText] = useDebounce(pokeName, 1500);  

  const paintPokemons = () => {
    return pokemons.map((poke, i) => <Cardlistbounce pokemon={poke} key={i} />)
  }

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedText}`);
      const myPokemon =[...pokemons,{
        name: resp.data.name,
        picture: resp.data.sprites.front_default,
        id: resp.data.id
      }]
      setPokemons(myPokemon);
  }
    getPokemons()
  }, [debouncedText]);
 
  return (
    <div>
      <form>
        <label htmlFor="pokemon">Introduce un pokemon y te pintare cada búsqueda:</label><br />
        <input type="text" id="pokemon" name="pokemon" onChange={(e) => setPokeName(e.target.value)}/><br />
      </form>
      {paintPokemons()}
    </div>
  );
};

export default Listapokemonbounce;
