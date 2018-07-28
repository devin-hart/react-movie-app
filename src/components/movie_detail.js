import React from 'react';

const MovieDetail = (props) => {
  return (
    <div>
        { props.title && <h1>{props.title}</h1> }
        { props.tagline && <h3>{props.tagline}</h3> }
        { props.overview && <p>{props.overview}</p>}
        { props.release_date && <p>{props.release_date}</p> }
        { props.vote_average && <p>{props.vote_average}</p> }
        { props.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt=""/> }
        { props.error && <h2>{ props.error }</h2> }
      </div>
  );
}

export default MovieDetail;
