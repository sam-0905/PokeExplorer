
import React from 'react'
import { useEffect, useState } from "react";

const useFavorite = () => {

    const [favorites ,setFavorites] = useState([]);

    // Load favorites from localStorage
    useEffect(() =>{
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        setFavorites(storedFavorites || []);
    },[])

    // save to localStorage
     useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
     },[favorites])

    // Toogle favorite
    function toggleFavorite(pokemon){
        const isFavorite = favorites.some((fav) => fav.name === pokemon.name);
        if(isFavorite){
            setFavorites(favorites.filter((fav) => fav.name !== pokemon.name));
        }else{
            setFavorites([...favorites, pokemon]);
        }
    }
  return (
    {favorites, toggleFavorite}
  )
}

export default useFavorite;