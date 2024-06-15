import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from "../images/NotFound.jpg";
const CrewCard = ({ poster, name, id, popularity, character, movieData, tvData, department, job }) => {
  return (
    <div className={poster ? "carousel-item w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 hover:opacity-90 group relative transition-all overflow-hidden" : "hidden" }>
      {poster && <div>
        <Link to={movieData ? `/movie/crew/${id}` : `/tvseries/crew/${id}`}>
          <img src={poster ? `https://image.tmdb.org/t/p/original/${poster}` : `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600`} className="w-full rounded-box scale-100 group-hover:scale-105 transition-all duration-500" />
        </Link>
        <div className='absolute top-2/4 left-0 hidden group-hover:block bg-black bg-opacity-75 w-full h-full space-y-2'>
          <p className='text-base text-white'>Name - {name}</p>
          <p className='text-base text-white'>Department - {department}</p>
          <p className='text-green-500 text-bold'>Job - {job}</p>
          <p className='text-blue-500 text-bold'>popularity - {popularity}</p>
        </div>
      </div>}
    </div>

  )
}

export default CrewCard;