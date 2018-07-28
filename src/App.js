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
    runtime: undefined,
    error: undefined
  }

  getMovie = async (event) => {
    event.preventDefault();
    const movie = event.target.elements.movie.value;
    const apiCall = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`);
    const data = await apiCall.json();
    

    if (movie) {
      console.log(data);
      this.setState({
        title: data.results[0].title,
        tagline: data.results[0].tagline,
        overview: data.results[0].overview,
        vote_average: data.results[0].vote_average,
        release_date: data.results[0].release_date,
        poster_path: data.results[0].poster_path,
        runtime: data.results[0].runtime,
        error: ''
      });
    } else {
      this.setState({
        title: undefined,
        tagline: undefined,
        overview: undefined,
        vote_average: undefined,
        release_date: undefined,
        poster_path: undefined,
        runtime: undefined,
        error: 'Movie not found.'
    });
  }
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar getMovie={this.getMovie}/>
        <MovieDetail 
          title={this.state.title}
          tagline={this.state.tagline}
          overview={this.state.overview}
          vote_average={this.state.vote_average}
          release_date={this.state.release_date}
          poster_path={this.state.poster_path}
          runtime={this.state.runtime}
          error={this.state.error}
          />
      </div>
    );
  }
}


export default App;
