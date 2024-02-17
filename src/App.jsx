import { useState,useEffect } from 'react'
import { fetchdatafromapi } from './utils/api.js'


function App() {
  
  useEffect(()=>{
    // because we want the rendering to be done only at the initail render.
    apiTesting();
  },[]);
  const apiTesting = () =>{
      fetchdatafromapi('/movie/popular').then((data)=>{
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      });
  }

  return (
    <>
      
    </>
  )
}

export default App
