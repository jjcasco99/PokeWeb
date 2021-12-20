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
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const myPokemon =[...pokemons,{
        name: resp.data.name,
        picture: resp.data.sprites.front_default,
        id: resp.data.id
      }]
      setPokemons(myPokemon);
  }
    getPokemons()
  }, [pokeName]);
  console.log(pokemons)
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon">Introduce un pokemon y te pintare cada búsqueda:</label><br />
        <input type="text" id="pokemon" name="pokemon" /><br />
        <input type="submit" />
      </form>
      <> {paintPokemons()}</>
    </div>
  );
};

export default Listapokemon;







