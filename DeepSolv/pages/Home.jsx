import {pokemonApi} from "../constant";
import { useEffect, useState } from "react";

const Home = () => {

const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData =  async () => {
            try{
                const res = await fetch(pokemonApi);
                const data = await res.json();
                setPokemon(data.results);
                setLoading(false);
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

        return (<>
        {loading && <h1>Loading........</h1>}
        <h1>Pokemon List</h1>

        {pokemon.map((p) => (
            <div key={p.name}>
                <h2>{p.name}</h2>
            </div>
        ))}    

        </>
    )}


export default Home;