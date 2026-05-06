import React from "react";
import "./PokemonCard.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const PokemonCard = ({data,favorites,toggleFavorite}) =>{

    const navigate = useNavigate();
   const isFavorite = favorites.some((p) => p.name === data.name);

    return(
        <>
        <div className="card">
            <h3 className="card-name">{data.name}</h3>
            <img src={data.image} alt={data.name} className="card-img" />
            <button className="details-btn" onClick={() => navigate(`/pokemon/${data.name}`)}>Info</button>
            <button onClick={() => toggleFavorite(data)} className="favorite-btn">
                {isFavorite ? "❤️" : "🤍"}
            </button>
        </div>
        </>
    )
}

export default PokemonCard;