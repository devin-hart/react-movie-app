import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import MovieDetail from './components/movie_detail';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

class App extends Component {
  getMovie = async (event) => {
    event.preventDefault();
    const apiCall = await fetch(`https://api.themoviedb.org/3/movie/111?api_key=${API_KEY}`);
    const data = await apiCall.json();
    console.log(data);
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar getMovie={this.getMovie}/>
        <MovieDetail />
      </div>
    );
  }
}

export default App;
