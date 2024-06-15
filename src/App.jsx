import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, SearchMovie, MovieDetail, TvSeriesDetail, ActorDetail, Success} from "./pages";
import { Footer, Navbar, ScrollButton } from './components';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <ScrollButton/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/movie/:movieId'  element={<MovieDetail/>}/>
        <Route path='/tvseries/:tvSeriesId'  element={<TvSeriesDetail/>}/>
        <Route path='/search/:movieTitle'  element={<SearchMovie/>}/>
        <Route path='/movie/cast/:actorId'  element={<ActorDetail/>}/>
        <Route path='/movie/crew/:actorId'  element={<ActorDetail/>}/>
        <Route path='/tvseries/cast/:actorId'  element={<ActorDetail/>}/>
        <Route path='/tvseries/crew/:actorId'  element={<ActorDetail/>}/>
        <Route path='/success'  element={<Success/>}/>
        {/* <Route path='/search/:tvSeriesTitle'  element={<SearchtV/>}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;