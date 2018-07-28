import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
        <form onSubmit={props.getMovie}>
          <input type="text" name="movie" placeholder="Search for a movie"/>
          <button>Search</button>
        </form>
      </div>
  );
}


export default SearchBar;
