import React from 'react';
import logo from '../tmdb-logo.png';

const SearchBar = (props) => {
  return (
    <div>
        <a href="https://www.themoviedb.org/">
          <img src={logo} className="logo" alt="The Movie Database Logo" />
        </a>
        <form onSubmit={props.getMovie}>
          <input type="text" name="movie" 
          placeholder="Search for a movie" 
          className="input" />
          <button className="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
  );
}


export default SearchBar;
