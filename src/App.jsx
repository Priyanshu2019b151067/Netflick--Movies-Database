import { useState,useEffect } from 'react'
import { fetchdatafromapi } from './utils/api.js'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice.js';
import Home from './pages/home/Home.jsx';

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  console.log(url);
  useEffect(()=>{
    // because we want the rendering to be done only at the initail render.
    apiTesting();
  },[]);
  const apiTesting = async () =>{
    try{
      const data  =await fetchdatafromapi('/movie/popular');
      console.log(data);
      dispatch(getApiConfiguration(data));
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
     {url?.page}
    </>
  )
}

export default App
