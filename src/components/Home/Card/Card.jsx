import React from "react";

const Card = (props) => {
        return (
          <div className="pokemon">
            <h2>Nombre: {props.pokemon.name}</h2> 
            <img src={props.pokemon.picture} alt={props.pokemon.name} width={200}/>
            <p>Id en la pokeapi: {props.pokemon.id}</p>
          </div>
        )
};

export default Card;
