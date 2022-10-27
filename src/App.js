import './App.css';
import React, { useState, useEffect } from "react";
import video from './Birds.mp4';
import { Time } from './Time';

function App() {

  const [tips, setTips] = useState("");

  const fetchTips = async () => {

  const response = await fetch("https://www.boredapi.com/api/activity/");
  const data = await response.json();

  setTips(data.activity);

  };

  useEffect(() => {

    fetchTips();

  }, []);

  return (
    
    <div className="App">
    
      <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
      </video>
    
    <div className='head'>
      <h1>Find new <span className='gradient'><em> things</em></span> to do</h1>
    </div>
    <div className='container'>
    <div className='advice'>
      <p className='advice-type'> {tips} </p>
    </div> 
    </div>
    <div className='btnform'>
      <button className='btn' onClick={fetchTips}>New Tip</button>
    </div>
    <div className='footer'>
    <Time />
    <p className='ftext'>Stock footage provided by Videvo, downloaded from <a href='https://www.videvo.net/' target="_blank" rel="noreferrer">video.net</a></p>
    <p className='ftext'>For educational purposes only </p>
    </div>
    </div>
    
  );
}

export default App;

