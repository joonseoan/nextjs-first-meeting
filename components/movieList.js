import React, { useState } from 'react';
import Link from 'next/link';

const MovieList = props => {
  
  const shorten = (text, maxLength) => {
      if(text && text.length > maxLength) {
        return text.substr(0, maxLength) + '...';
      }
      return text;
  }

  const movies = props.movieList;

  return(
    <React.Fragment>
        {
            movies.length > 0 && movies.map(movie => (
                <div key={ movie.id } className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                        <a><img className="card-img-top" src={ movie.image } alt={ movie.name } /></a>
                    </Link>
                    <div className="card-body">
                        <h4 className="card-title">
                        <Link href="/movies/[id]" as={`/movies/${ movie.id }`}>
                            <a>{ movie.name }</a>
                        </Link>
                        </h4>
                        <p className="card-text">{ shorten(movie.description, 100) }</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{ movie.rating }</small>
                    </div>
                    </div>
                </div>
            ))
        }
        {
            movies.length === 0 && <div>Loading..</div>
        }
    </React.Fragment>
  );
}

export default MovieList;