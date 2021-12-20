import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/lista">LISTA POKEMON</Link></li>
        <li><Link to="/listabounce">POKEMON DEBOUNCE</Link></li>
      </ul>
    </nav>
  )
};

export default Nav;
