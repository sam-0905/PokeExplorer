import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

const App = () => {

    return (
         <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pokemon/:name" element={<PokemonDetails/>} />
        </Routes>   
         </>
    )}

export default App;