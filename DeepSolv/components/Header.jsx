
import React from 'react'
import { Link } from "react-router";

const Header = () => {

  return (
    <div className='Header'>
    <h1>Pokémon Explorer</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
    <Link to="/favorites">Favorites</Link>
    </div>
    </div>

  )
}

export default Header