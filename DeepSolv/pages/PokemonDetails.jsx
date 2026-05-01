import { useState,useEffect } from "react";
import { useParams } from "react-router";
import "./PokemonDetails.css";

const PokemonDetails = () => {

    const {name} = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
     const fetchDetails = async() => {
        try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log(res)
        const data = await res.json();
        console.log(data)
        setDetails(data); 
        }
        catch(error){
            console.error("Error fetching pokemon details:", error);
        }
     }  
        fetchDetails();
    }, [name])

    return (
        <div className="pokemonDetails">   
            <h1>{details?.name}</h1>
            <img src={details?.sprites.front_default} alt={details?.name} />
            <h2>Height: {details?.height}</h2>
            <h2>weight: {details?.weight}</h2>
            <h2>id: {details?.id}</h2>
            <h2>base_experience: {details?.base_experience}</h2>
            <h2>abilities: {details?.abilities?.map((ability) => ability.ability.name).join(", ")}</h2>
        </div>
    )
}

export default PokemonDetails;