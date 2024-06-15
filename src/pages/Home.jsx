import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeroCard, MovieCard, Heading, Loading } from '../components';
import fetchMovies from '../utils/fetchData';

const Home = () => {
   const [page, setPage] = useState(1)
   console.log(page);
  const [heromovies, setHeroMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("movie");
  const [type, setType] = useState("movie");
  console.log(heromovies);

  const fetchMoviesData = async () => {
    try {
      setLoading(true);

      // new
      const data = await fetchMovies("discover/movie?language=en-US");
      setHeroMovies(data.results);
      console.log(data?.results);

      const trendingData = await fetchMovies(`trending/${genre}/day?language=en-US&page=${page}`);
      // setPage(trendingData?.page);
      setTrending(trendingData?.results);
      console.log(trendingData);
      // new
      const topRatedData = await fetchMovies(`${type}/top_rated?language=en-US&page=${page}`);
      setTopRated(topRatedData?.results);

      // new
      const upcomingData = await fetchMovies(`movie/upcoming?language=en-US&page=${page}`);
      setUpComing(upcomingData?.results);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMoviesData();
  }, [genre, type, page])



  if (loading) {
    return (
      <Loading />
    )
  }


  return (

    <section className='space-y-12'>

        {/* hero movie carousel */}
      <div className='carousel w-full'>
        {heromovies?.map((movie, i) => (
          <HeroCard key={i} poster={movie?.backdrop_path} i={i} name={movie?.original_title} movieId={movie?.id} />
        ))}
      </div>

             
        <div className='container mx-auto px-4 flex justify-between items-center'>
              <button className='px-3 py-2 sm:px-4 sm:py-2 text-base sm:text-xl bg-black hover:opacity-80 text-white rounded-md' onClick={() => setPage((prevState) => prevState + 1)} title='next apge of movies'>page - {page}</button>
         
              <button className="px-3 py-2 sm:px-4 sm:py-2 text-base sm:text-xl bg-black hover:opacity-90 text-white rounded-md" onClick={() => setPage (page - 1)} disabled={page === 1 } title='previous page of movies'>Prev Page</button>
        </div>



           {/* trending  */}
 

      <div className="container mx-auto px-4">
       
        <div className='flex justify-between items-center'>
          {genre === "movie" ? <Heading heading="Trending Movies" /> : <Heading heading="Trending Shows" />}
          <div className='space-x-4 sm:space-x-6'>
            <button className='px-3 py-2 sm:px-5 md:py-2 text-base sm:text-lg font-medium bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-all duration-200' onClick={() => setGenre("movie")}>Movie</button>
            <button className='px-3 py-2 sm:px-5 md:py-2 text-base sm:text-lg font-medium bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-all duration-200' onClick={() => setGenre("tv")}>Tv</button>
          </div>
        </div>

        <div className="carousel space-x-2 rounded-box w-full">
          {trending.map((movie, i) => (
            <MovieCard poster={movie?.poster_path} title={movie?.title} overview={movie?.overview} i={i} key={i} release_date={movie?.release_date} popularity={movie?.popularity} movieId={movie?.id} discoverMovieData={movie} genre={genre} />
          ))}
        </div>
      </div>




        {/* top rated */}
      <div className="container mx-auto px-4">
        <div className='flex justify-between items-center'>
          {type === "movie" ? <Heading heading="Top Rated Movies" /> : <Heading heading="Top Rated Shows" />}
          <div className='space-x-4 sm:space-x-6'>
            <button className='px-3 py-2 sm:px-5 md:py-2 text-base sm:text-lg font-medium bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-all duration-200' onClick={() => setType("movie")}>Movie</button>
            <button className='px-3 py-2 sm:px-5 md:py-2 text-base sm:text-lg font-medium bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-all duration-200' onClick={() => setType("tv")}>Tv</button>

          </div>
        </div>

        <div className="carousel rounded-box w-full space-x-2">
          {topRated.map((movie, i) => (
            <MovieCard poster={movie?.poster_path} title={movie?.title} overview={movie?.overview} i={i} key={i} release_date={movie?.release_date} popularity={movie?.popularity} movieId={movie?.id} discoverMovieData={movie} genre={type} />
          ))}
        </div>
      </div>





{/* upcoming */}
      <div className="container mx-auto px-4">
        <div className='flex justify-between items-center'>
          <Heading heading="Upcoming" />
        </div>

        <div className="carousel rounded-box w-full space-x-2">
          {upcoming.map((movie, i) => (
            <MovieCard poster={movie?.poster_path} title={movie?.title} overview={movie?.overview} i={i} key={i} release_date={movie?.release_date} popularity={movie?.popularity} movieId={movie?.id} discoverMovieData={movie} genre={genre} />
          ))}
        </div>
    
      </div>



 
    </section>





  )
}

export default Home;
