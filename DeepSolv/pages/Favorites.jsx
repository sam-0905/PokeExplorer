import PokemonCard from "../components/PokemonCard";
import useFavorite from "../Hooks/useFavorite";

const Favorites = () => {

    const{favorites, toggleFavorite} = useFavorite();

    console.log(favorites)
    return (
        <>
        <h1>Favorites</h1>

        {favorites.length > 0 ? (
           <div className="pokemon-list">
                {favorites.map((fav) => (
                    <PokemonCard  
                    key={fav.name} 
                    data={fav} 
                    favorites={favorites} 
                    toggleFavorite={toggleFavorite} 
                    />
                ))}            
                </div>
        ) : (
             <p>No favorite pokemon yet.</p>
        )
        }
        </>
    )
}

export default Favorites;

