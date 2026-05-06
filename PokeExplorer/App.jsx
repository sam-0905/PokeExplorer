import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

const App = () => {

    return (
         <>
         <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pokemon/:name" element={<PokemonDetails/>} />
            <Route path="/favorites" element={<Favorites/>} />
        </Routes>   
         </>
    )}

export default App;