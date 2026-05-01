import PokemonCard from "../components/PokemonCard";
import {pokemonApi} from "../constant";
import { useEffect, useState } from "react";


const Home = () => {

const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(true);
const [searchText, setSearchText] = useState("");
const [selectedType, setSelectedType] = useState("");

const [page, setPage] = useState(0);
const limit = 20;

const filteredPokemon = pokemon.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchText.toLowerCase());    
    const matchType = selectedType  === "" || p.types.includes(selectedType) ;

    return matchSearch && matchType;
});

    useEffect(() => {
        const fetchData =  async () => {
            try{
                setLoading(true);
                const offset = page * limit;
                const res = await fetch(`${pokemonApi}?limit=${limit}&offset=${offset}`);
                const data = await res.json();

            const pokemonDetails = await Promise.all(
                data.results.map(async (p) => {
                    const res = await fetch(p.url);
                    const details = await res.json();
                    return {
                        name: details.name,
                        image: details.sprites.front_default,
                        types: details.types.map((t) => t.type.name)
                    }
                })
            )
            setPokemon(pokemonDetails);
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

           <select name="" id="" onChange={(e) => setSelectedType(e.target.value)}>
                <option value="">All Types</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="poison">poison</option>
            </select> 


        <h1 className="Heading">Pokemon List</h1>

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
            |
            <span>Page :{page + 1}</span>
            |
            <button onClick={() => setPage((prev) => prev + 1 )}>Next</button>
         </div>
    
        </>
    )}


export default Home;