import React, { useEffect, useState } from 'react';
import Cardlist from './Cardlist'
import axios from 'axios';

const Listapokemon = () => {

  const [pokeName, setPokeName] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setPokeName(e.target.pokemon.value)
    e.target.pokemon.value="";
  }

  

  const paintPokemons = () => {
    return pokemons.map((poke, i) => <Cardlist pokemon={poke} key={i} />)
  }

  useEffect(() => {
    const getPokemons = async () => {
      if(pokemons.some(pokemon => pokemon.name === pokeName)){
        alert("Pokemon existente");
      } else {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        const myPokemon =[...pokemons,{
          name: resp.data.name,
          picture: resp.data.sprites.front_default,
          id: resp.data.id
        }]
        setPokemons(myPokemon);
      }
    }
    getPokemons()
  }, [pokeName]);
  // console.log(pokemons)
  


  return (
    <div className='general'>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="pokemon">INTRODUCE UN POKEMON Y TE PINTARE CADA BÚSQUEDA:</label><br />
        <input type="text" id="pokemon" name="pokemon" /><br />
        <input type="submit" className="button" />
      </form>
      <> {paintPokemons()}</>
    </div>
  );
};

export default Listapokemon;







