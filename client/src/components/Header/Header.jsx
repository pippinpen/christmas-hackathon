import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>Cracking Christmas Countdown!</span>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/playlists">Playlists</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/gifts">Gifts</NavLink>
        <NavLink to="/activities">Activities</NavLink>
      </nav>
    </header>
  );
}
