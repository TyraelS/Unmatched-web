import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1>Unmatched</h1>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
      <h3>
        <Link to='/game'>Game</Link>
      </h3>
      <h3>
        <Link to='/profile'>Profile</Link>
      </h3>
    </div>
  );
}

export default Header