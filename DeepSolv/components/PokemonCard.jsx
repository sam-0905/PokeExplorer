import React from "react";
import "./PokemonCard.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const PokemonCard = ({data}) =>{

    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchImg = async () => {
            try{
                const res = await fetch(data.url)
                const imgData = await res.json();
                setImage(imgData.sprites.front_default);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchImg();
    }, [data.url])

    return(
        <>
        <div className="card">
            <h3 className="card-name">{data.name}</h3>
            {image && <img src={image} alt={data.name} className="card-img" />}
            <button className="details-btn" onClick={() => navigate(`/pokemon/${data.name}`)}>Info</button>
        </div>
        </>
    )
}

export default PokemonCard;