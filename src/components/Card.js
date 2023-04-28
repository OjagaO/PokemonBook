import React from "react";
import "./Card.css"

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardNames">{pokemon.name}</h3>
      <div className="cardTypes">
        <span>タイプ：</span>
        {pokemon.types.map((type) => {
          return (
              <span key={type.type.name}> {type.type.name} /</span>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p>重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p>高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p>能力：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
