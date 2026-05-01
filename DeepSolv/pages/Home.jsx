import PokemonCard from "../components/PokemonCard";
import {pokemonApi} from "../constant";
import { useEffect, useState } from "react";


const Home = () => {

const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(true);
const [searchText, setSearchText] = useState("");

const [page, setPage] = useState(0);
const limit = 20;

const filteredPokemon = pokemon.filter((p) => p.name.toLowerCase().includes(searchText.trim().toLowerCase()));

    useEffect(() => {
        const fetchData =  async () => {
            try{
                setLoading(true);
                const offset = page * limit;
                const res = await fetch(`${pokemonApi}?limit=${limit}&offset=${offset}`);
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
    }, [page])

    function handleSearch(e){
        setSearchText(e.target.value);
    }
        return (
        <>
        {loading && <h1 className="loading">Loading........</h1>}
         <div>
            <input type="text" placeholder="search your fav pokemon" value={searchText} onChange={handleSearch} className="search-input"/>
         </div>
        <h1>Pokemon List</h1>

        {!loading && (
            filteredPokemon.length > 0 ? (
                <div className="card-container">
                {filteredPokemon.map((p) => (
                <PokemonCard data={p} key={p.name}/>
        ))}</div>):
        <h2 className="not-found">No Pokemon found</h2>
        )}

         <div className="pagination">
            <button disabled={page === 0} onClick={() => setPage((prev) => prev - 1 )}>Prev</button>
            <span>Page :{page + 1}</span>
            <button onClick={() => setPage((prev) => prev + 1 )}>Next</button>
         </div>
    
        </>
    )}


export default Home;