import React, { Component } from 'react';

class MovieDetail extends Component {
  render() {
    return (
      <div>
        { this.props.title && <h1>{this.props.title}</h1> }
        { this.props.tagline && <h3>{this.props.tagline}</h3> }
        { this.props.overview && <p>{this.props.overview}</p>}
        { this.props.release_date && <p>{this.props.release_date}</p> }
        { this.props.vote_average && <p>{this.props.vote_average}</p> }
        { this.props.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`} alt=""/> }
        { this.props.error && <h2>{ this.props.error }</h2> }
      </div>
    );
  }
};

export default MovieDetail;
