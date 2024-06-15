import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Loading } from '../components';
import NotFoundImg from "../images/NotFound.jpg";
import fetchMovies from '../utils/fetchData';

const ActorDetail = () => {
  const { actorId } = useParams();
  const [actorDetails, setActorDetails] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(actorDetails);
  const fetchactorDetail = async () => {
    try {
      setLoading(true);
      const data = await fetchMovies(`person/${actorId}?language=en-US`);
      setActorDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchactorDetail();
  }, [actorId]);



  if(loading){
    return (
     <Loading/>
    )
  }



  return (
    <section className='py-5'>
      <div className='container mx-auto px-4 space-y-6'>
        <div className="flex flex-col justify-center items-center  gap-5">
          <div className='bg-none overflow-hidden rounded-3xl'>
            <img src={actorDetails?.profile_path ? `https://image.tmdb.org/t/p/original/${actorDetails?.profile_path}`: `${NotFoundImg}`} alt="actor" className='w-full transition-all hover:scale-125 hover:opacity-95 duration-300 rounded-2xl h-auto sm:h-[70vh]' />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">{actorDetails?.name} {actorDetails?.also_known_as && <span>({actorDetails?.also_known_as[0]})</span>} </h2>
            <p>{actorDetails?.biography && actorDetails?.biography}</p>

            <div className='flex flex-row justify-between items-center gap-2'>
              <div className='flex flex-col gap-5'>
                <p className={actorDetails?.popularity ? "font-bold" : "hidden"}>Popularity -   {actorDetails?.popularity ? actorDetails?.popularity : "Not Found"}</p>
                <p className={actorDetails?.place_of_birth ? "font-bold" : "hidden"}>Birth Place -   {actorDetails?.place_of_birth ? actorDetails?.place_of_birth : "Not Found"}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <p className={actorDetails?.birthday ? "font-bold" : "hidden"}>Birthday -   {actorDetails?.birthday ? actorDetails?.birthday : "Not Found" }</p>

              </div>
            </div>


          </div>
        </div>


      </div>
    </section>
  )
}

export default ActorDetail