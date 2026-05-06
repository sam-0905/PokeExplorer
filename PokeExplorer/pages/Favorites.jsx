import PokemonCard from "../components/PokemonCard";
import useFavorite from "../Hooks/useFavorite";

const Favorites = () => {

    const{favorites, toggleFavorite} = useFavorite();

    console.log(favorites)
    return (
        <>
        <h1 className="fav-heading">Favorites 🤩 :<span>{favorites.length}</span></h1>


        {favorites.length > 0 ? (
           <div className="favorites-container">
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
             <p className="No-favorite">No favorite pokemon yet.</p>
        )
        }
        </>
    )
}

export default Favorites;

