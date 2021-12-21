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
      if(pokemons.some(pokemon => pokemon.name === pokeName)){
        alert("Pokemon existente");
      } else {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedText}`);
        const myPokemon =[...pokemons,{
          name: resp.data.name,
          picture: resp.data.sprites.front_default,
          id: resp.data.id
        }]
        setPokemons(myPokemon);
      }
    }
    getPokemons()
  }, [debouncedText]);
 
  return (
    <div className='general'>
      <form className='form'>
        <label htmlFor="pokemon">INTRODUCE UN POKEMON Y TE PINTARE CADA BÚSQUEDA:</label><br />
        <input type="text" id="pokemon" name="pokemon" onChange={(e) =>{
          if(e.target.value != null) {
            setPokeName(e.target.value)
          }
        }}/><br />
      </form>
      {paintPokemons()}
    </div>
  );
};

export default Listapokemonbounce;
