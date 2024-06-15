import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchMovieCard, Loading } from '../components';
import fetchMovies from '../utils/fetchData';
const SearchMovie = () => {
  const { movieTitle } = useParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(searchMovie);
  // console.log(searchMovie?.length);
  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const data = await fetchMovies(`search/movie?query=${movieTitle}&language=en-US`);
      // const data = await fetchMovies(`search/multi?query=${movieTitle}&language=en-US`);
      setSearchMovie(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovieDetail();
  }, [movieTitle]);



  // if (loading) {
  //   return (
  //     <Loading />
  //   )
  // }

  return (

    <section className='space-y-12'>
      {searchMovie.length > 0 ? (<div className="container mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {searchMovie?.map((s, i) => (
              <SearchMovieCard key={i} title={s?.title} overview={s?.overview} poster={s?.poster_path} release_date={s?.release_date} popularity={s?.popularity} id={s?.id} media_type={s?.media_type} />
            ))}
        </div>
      </div>) : 
        (<div className='flex justify-center items-center w-full h-screen flex-col gap-5'>
        <h3 className='text-xl sm:text-5xl text-white font-medium'>No Result Found...</h3>
        <p className='text-base sm:text-lg'>please searh for relevent keywords. or retry again</p>
        </div>)
       }


    </section>
  )
}

export default SearchMovie;


    