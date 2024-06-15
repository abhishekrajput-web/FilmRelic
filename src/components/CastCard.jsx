import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from "../images/NotFound.jpg";
const CastCard = ({poster, name, id, popularity, character, movieData, tvData}) => {
  return (
    <div className={poster ? "carousel-item w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 hover:opacity-90 group relative transition-all overflow-hidden" : "hidden" }>
      {poster && 
          <div>
          <Link to={ movieData ?  `/movie/cast/${id}` : `/tvseries/cast/${id}` }>
        <img src={ poster ? `https://image.tmdb.org/t/p/original/${poster} ` : `https://cdn.pixabay.com/photo/2020/03/20/18/52/fashion-4951644_1280.jpg` } className="w-full rounded-box scale-100 hover:scale-105 transition-all duration-500" />
          </Link>
        <div className='absolute top-2/4 left-0 hidden group-hover:block bg-black bg-opacity-75 w-full h-full space-y-2'>
          <p className='text-base text-white'>Name - {name}</p>
          <p className='text-green-500 text-bold'>character - {character}</p>
          <p className='text-blue-500 text-bold'>popularity - {popularity}</p>
        </div>
      </div> 
      }
    </div>

  )
}

export default CastCard;

// carousel-item w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 hover:opacity-90 group relative transition-all overflow-hidden