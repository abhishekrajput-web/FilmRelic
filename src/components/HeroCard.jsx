import React from 'react';
import { Link } from 'react-router-dom';
const HeroCard = ({ poster, i, movieId, name }) => {
    return (
        // <div id={`slide${i}`} key={i} className="carousel-item relative w-full">
        // <div className='w-full'>
        // <Link to={`/movie/${movieId}`} className='w-full'>
        //     <img className='w-full object-cover h-auto lg:h-[80vh]' src={`https://image.tmdb.org/t/p/original/${poster}`} />
        // </Link>
        // </div>
        // <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //     <a href={`#slide${i - 1}`} className="btn btn-circle">❮</a>
        //     <a href={`#slide${i + 1}`} className="btn btn-circle">❯</a>
        // </div>
        // </div>


            <div id={`item${i}`} className="carousel-item w-full opacity-80 hover:opacity-90 group relative transition-all overflow-hidden" >
                <div className='w-full relative'>
                <img className='w-full object-cover h-auto lg:h-[90vh]' src={`https://image.tmdb.org/t/p/original/${poster}`} />
                <div className=''>
                <Link to={`/movie/${movieId}`} className='text-base text-black absolute top-1/2 left-10 px-3 py-2 sm:px-5 md:py-2 sm:text-lg font-normal bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-200'>Watch Now</Link>
                    <h1 className='text-gray-200 font-bold text-lg md:text-5xl absolute bottom-0 left-10 bg-black opacity-50'>{name}</h1>
                </div>

                </div>
            </div>

    )
}


export default HeroCard;