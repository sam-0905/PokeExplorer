import PokemonCard from "../components/PokemonCard";
import {pokemonApi} from "../constant";
import { useEffect, useState } from "react";


const Home = () => {

const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(true);
const [searchText, setSearchText] = useState("");

const filteredPokemon = pokemon.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));

    useEffect(() => {
        const fetchData =  async () => {
            try{
                const res = await fetch(pokemonApi);
                const data = await res.json();
                setPokemon(data.results);
            }
            catch(err){
                console.log(err);   
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    function handleSearch(e){
        setSearchText(e.target.value);
    }
        return (
        <>
        {loading && <h1>Loading........</h1>}
         <input type="text" placeholder="search pokemon" value={searchText} onChange={handleSearch} className="search-input"/>
        <h1>Pokemon List</h1>

        {!loading && (
            filteredPokemon.length > 0 ?
            (filteredPokemon .map((p) => (
                <PokemonCard data={p} key={p.name}/>
        ))) :
        <h2>No Pokemon found</h2>
        )
      
    }    

        </>
    )}


export default Home;