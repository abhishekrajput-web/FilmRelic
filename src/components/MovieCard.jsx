import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from "../images/NotFound.jpg";
const MovieCard = ({ discoverMovieData, discoverTvSeriesData, id, poster, title, overview, release_date, popularity, i, movieId, genre
  

}) => {
  return (
    <div className="carousel-item w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:opacity-90 group relative transition-all overflow-hidden" >
    <Link to={genre === "movie" ? `/movie/${movieId}` : `/tvseries/${movieId}`}>
      <img src={poster ? `https://image.tmdb.org/t/p/original/${poster}` : `${NotFoundImg}`} className="w-full object-contain h-auto rounded-box scale-100 group-hover:scale-105 transition-all duration-500" />
    </Link>
    <div className='absolute top-2/4 left-0 hidden group-hover:block bg-black bg-opacity-75 w-full h-full space-y-2'>
      <p className='text-base text-white'>{overview.slice(0, 120) + "..."}</p>
      <p className='text-green-500 text-bold'>Release Date - {release_date}</p>
      <p className='text-blue-500 text-bold'>Popularity - {popularity }</p>
    </div>
  </div>

  )
}

export default MovieCard;