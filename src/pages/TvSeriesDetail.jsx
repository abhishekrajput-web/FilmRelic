import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from '../utils/fetchData';
import { CastCard, CrewCard, Loading } from '../components';
const TvSeriesDetail = () => {
  const { tvSeriesId } = useParams();
  const [tvSeriesDetails, setTvSeriesDetails] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(tvSeriesDetails);

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const data = await fetchMovies(`tv/${tvSeriesId}?append_to_response=videos,credits&language=en-US`);
      setTvSeriesDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovieDetail();
  }, [tvSeriesId]);



  if (loading) {
    return (
      <Loading />
    )
  }



  return (
    <section>

      {/* poster and tv series detail */}
      <div className='container mx-auto px-4 space-y-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <img src={tvSeriesDetails?.poster_path ? `https://image.tmdb.org/t/p/original/${tvSeriesDetails?.poster_path}` : `https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="Movie" className='w-full' />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">{tvSeriesDetails?.name}</h2>
            <p>{tvSeriesDetails?.overview}</p>
            <div className='space-x-4 space-y-5'>
              {tvSeriesDetails?.genres?.slice(0, 3).map((g, i) => (
                <button key={i} className="btn btn-outline btn-primary">{g?.name}</button>
              ))}
            </div>
            <div className='flex flex-row justify-between items-center gap-2'>
              <div className='flex flex-col gap-5'>
                <p className={tvSeriesDetails?.popularity ? 'font-bold' : "hidden"}>Popularity -   {tvSeriesDetails?.popularity}</p>
                <p className={tvSeriesDetails?.first_air_date ? 'font-bold' : "hidden"}>Release Date -   {tvSeriesDetails?.first_air_date}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <p className={tvSeriesDetails?.vote_average ? 'font-bold' : "hidden"}>Votes Average -   {tvSeriesDetails?.vote_average}</p>
                <p className={tvSeriesDetails?.vote_count ? 'font-bold' : "hidden"}>Vote Count -  {tvSeriesDetails?.vote_count}</p>
              </div>
            </div>


{/* production company and counties */}
            <div className='space-y-5'>
              <h2 className='font-medium text-xl'>Production Countries</h2>
              <div className='flex flex-row justify-between items-center gap-5'>
                {tvSeriesDetails?.production_countries?.map((p, i) => (
                  <p key={i} className='btn btn-outline btn-warning'>{p?.name}</p>
                ))}
              </div>
            </div>

            <div className='space-y-5 visible sm:hidden'>
              <h2 className='font-medium text-xl'>Production Company</h2>
              <div className='flex flex-col sm:flex-row justify-between gap-3'>
                {tvSeriesDetails?.production_companies?.slice(0, 2).map((p, i) => (
                  <div key={i} className='flex flex-col gap-2'>
                    <p className='btn btn-outline btn-primary"'>{p?.name}</p>
                    <img src={`https://image.tmdb.org/t/p/original/${p?.logo_path}`} alt={p?.name} className='w-32 rounded-full hover:opacity-90 transition-all aspect-square object-contain' />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


{/* youtube trailers */}

        {tvSeriesDetails?.videos?.results.length > 0 &&
          <div className='space-y-6'>
            <h2 className='text-2xl font-medium underline'>Watch Trailer</h2>
            <div className={tvSeriesDetails?.videos?.results?.length < 0 ? `` : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'}>
              {tvSeriesDetails?.videos?.results?.slice(0, 3).map((mv, i) => (
                <iframe key={i} src={`https://www.youtube.com/embed/${mv?.key}`} className='w-full' height="290px" title="YouTube video player"></iframe>
              ))}
            </div>
          </div>
        }


{/* tv series cast */}

        {tvSeriesDetails?.credits?.cast?.length > 0 &&
          <div className='space-y-6'>
            <h2 className='text-2xl font-medium text-white underline'>Cast Member</h2>
            <div className="carousel rounded-box w-full space-x-2">
              {tvSeriesDetails?.credits?.cast?.map((actor, i) => (
                <CastCard key={i} poster={actor?.profile_path} name={actor?.name} character={actor?.character} popularity={actor?.popularity} id={actor?.id} i={i} tvData={actor} />
              ))}

            </div>
          </div>

        }


{/* tv series crew */}
        {tvSeriesDetails?.credits?.crew?.length > 0 &&
          <div className='space-y-6'>
            <h2 className='text-2xl font-medium text-white underline'>Crew Member</h2>
            <div className="carousel rounded-box w-full space-x-2">
              {tvSeriesDetails?.credits?.crew?.map((crew, i) => (
                <CrewCard key={i} poster={crew?.profile_path} name={crew?.name} character={crew?.character} popularity={crew?.popularity} id={crew?.id} i={i} tvData={crew} />
              ))}

            </div>
          </div>

        }

      </div>
    </section>
  )
}

export default TvSeriesDetail;