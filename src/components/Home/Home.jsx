import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';



const Home = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeName(e.target.pokemon.value)
    e.target.pokemon.value="";
  }

  useEffect(() => {
    const getPokemons = async () => {
      try {

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        setPokemons({
          name: resp.data.name,
          picture: resp.data.sprites.front_default,
          id: resp.data.id
        });
      } catch {
        setPokemons([]);
      }
    }
    getPokemons();
  }, [pokeName]);



  return (
    <div className='general'>
      <h1>¡BIENVENIDO A LA WEB DE API-POKEMON, PRUEBA LAS DIFERENTES FUNCIONES!</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="pokemon">INTRODUCE UN POKEMON:</label><br />
        <input type="text" id="pokemon" name="pokemon" /><br />
        <input type="submit" className="button"/>
      </form>
      <> {pokeName ? <Card pokemon={pokemons} /> : ""}</>
    </div>
  );
};

export default Home;
