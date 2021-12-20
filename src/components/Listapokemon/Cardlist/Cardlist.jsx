import React from "react";

const Cardlist = (props) => {
  return (
    <div className="pokemon">
      <h2>Nombre: {props.pokemon.name}</h2> 
      <img src={props.pokemon.picture} alt={props.pokemon.name} width={150}/>
      <p>Id en la pokeapi: {props.pokemon.id}</p>
    </div>
  )
};

export default Cardlist;
