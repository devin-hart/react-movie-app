import React from 'react';

const MovieDetail = (props) => {
  return (
    <div>
        { props.title && <h1 className="movie-title">{props.title}</h1> }
        { props.tagline && <h3>{props.tagline}</h3> }
        { props.overview && <p>{props.overview}</p>}
        
        { props.release_date && 
          <p className="release-date">
            <strong>Release Date: </strong>{props.release_date}
          </p> 
        }

        { props.vote_average && 
          <p className="vote-average">
            <strong>IMDb Rating: </strong>{props.vote_average}
          </p> 
        }

        { props.poster_path && 
          <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
          alt={`${props.title} Movie Poster`}
          className="poster" /> 
        }
        
        { props.error && <h2>{ props.error }</h2> }
      </div>
  );
}

export default MovieDetail;
