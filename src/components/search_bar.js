import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getMovie}>
          <input type="text" name="Movie" placeholder="Search for a movie"/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}


export default SearchBar;
