import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import MovieDetail from './components/movie_detail';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    title: undefined,
    tagline: undefined,
    overview: undefined,
    vote_average: undefined,
    release_date: undefined,
    poster_path: undefined,
    genres: undefined,
    runtime: undefined,
    error: undefined
  }

  getMovie = async (event) => {
    event.preventDefault();
    const movie = event.target.elements.movie.value;
    const apiCall = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`);
    const data = await apiCall.json();
    console.log(data);

    this.setState({
      title: data.title,
      tagline: data.tagline,
      overview: data.overview,
      vote_average: data.vote_average,
      release_date: data.release_data,
      poster_path: data.poster_path,
      genres: data.genres.name,
      runtime: data.runtime,
      
    })
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
