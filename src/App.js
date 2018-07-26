import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import MovieDetail from './components/movie_detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
