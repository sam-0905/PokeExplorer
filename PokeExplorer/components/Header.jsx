
import React from 'react'
import { Link } from "react-router";

const Header = () => {

  return (
    <div className='Header'>
      <Link to="/"><h1>Poké Explorer</h1></Link>
    <div className="nav-links">
    <Link to="/favorites">Favorites</Link>
    </div>
    </div>

  )
}

export default Header