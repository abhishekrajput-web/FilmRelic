import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
// import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import { CastCard, CrewCard, Loading } from '../components';
import fetchMovies from '../utils/fetchData';

const MovieDetail = () => {

console.log(window.location.protocol);
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(movieDetails);

  // console.log(movieDetails?.credits?.crew);
console.log(movieDetails.videos?.results);
  console.log();
  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const data = await fetchMovies(`movie/${movieId}?language=en-US&append_to_response=videos,credits`);
      setMovieDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);



  if(loading){
    return (
     <Loading/>
    )
  }

  return (
    <section>
      <div className='container mx-auto px-4 space-y-6'>

        {/* poster and detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img src={movieDetails?.poster_path ? `https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}` : `https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="Movie" className='w-full' />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">{movieDetails?.original_title}</h2>
            <p>{movieDetails?.overview}</p>
            <div className='flex flex-row flex-wrap justify-between items-center gap-4'>
              {movieDetails?.genres?.slice(0, 3).map((g, i) => (
                <button key={i} className="btn btn-outline btn-primary">{g?.name}</button>
              ))}
            </div>
            <div className='flex flex-row justify-between items-center gap-2'>
              <div className='flex flex-col gap-5'>
                <p className={movieDetails?.popularity ? 'font-bold' : "hidden"}>Popularity -   {movieDetails?.popularity}</p>
                <p className={movieDetails?.release_date ? 'font-bold' : "hidden"}>Release Date -   {movieDetails?.release_date}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <p className={movieDetails?.vote_average ? 'font-bold' : "hidden"}>Votes Average -   {movieDetails?.vote_average}</p>
                <p className={movieDetails?.vote_count ? 'font-bold' : "hidden"}>Vote Count -  {movieDetails?.vote_count}</p>
              </div>
            </div>


            {/* production countries and company */}

            <div className='space-y-5'>
              <h2 className='font-medium text-xl'>Production Countries</h2>
              <div className='flex flex-row flex-wrap justify-between items-center gap-4'>
                {movieDetails?.production_countries?.map((p, i) => (
                  <p key={i} className='btn btn-outline btn-warning'>{p?.name}</p>
                ))}
              </div>
            </div>

            <div className='space-y-5 visible sm:hidden'>
              <h2 className='font-medium text-xl'>Production Company</h2>
              <div className='flex flex-col sm:flex-row justify-between gap-3'>
                {movieDetails?.production_companies?.slice(0, 2).map((p, i) => (
                  <div key={i} className='flex flex-col gap-2'>
                    <p className='btn btn-outline btn-primary'>{p?.name}</p>
                    <img src={`https://image.tmdb.org/t/p/original/${p?.logo_path}`} alt={p?.name} className='w-32 rounded-full hover:opacity-90 transition-all aspect-square object-contain' />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


{/* trailer youtube */}


{movieDetails?.videos?.results?.length > 0 &&
        <div className='space-y-6'>
  <h2 className='text-2xl font-medium underline'>Watch Trailer</h2>
  <div className= {movieDetails?.videos?.results.length < 0 ? ``  : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'}>
{movieDetails.videos?.results?.slice(0,2).map((mv, i) => (
 <iframe key={i} src={`https://www.youtube.com/embed/${mv?.key}`}  className='w-full h-72' title="YouTube video player"  allowFullScreen></iframe> 
))}
  </div>
</div>
}



{/* cast movie */}
{movieDetails?.credits?.cast?.length > 0 && 
        <div className='space-y-6'>
          <h2 className='text-2xl font-medium text-white underline'>Cast Member</h2>
        <div className="carousel rounded-box w-full space-x-2">
        {movieDetails?.credits?.cast?.slice(0, 20).map((actor, i) => (
          <CastCard key={i} poster={actor?.profile_path} name={actor?.name} character={actor?.character} popularity={actor?.popularity} id={actor?.id} i={i} movieData={actor} />
          ))}

        </div>
          </div>

}



{/* crew movie */}
{movieDetails?.credits?.crew?.length > 0 &&
          <div className='space-y-6'>
          <h2 className='text-2xl font-medium text-white underline'>Crew Member</h2>
        <div className="carousel rounded-box w-full space-x-2">
        {movieDetails?.credits?.crew?.slice(0, 20).map((crew, i) => (
          <CrewCard key={i} poster={crew?.profile_path} name={crew?.name} character={crew?.character} popularity={crew?.popularity} id={crew?.id} i={i} movieData={crew} job={crew?.job} department={crew?.department} />
          ))}

        </div>
          </div>

}

      </div>
    </section>
  )
}

export default MovieDetail;