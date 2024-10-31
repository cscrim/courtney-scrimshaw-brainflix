import { useState } from 'react';
import Header from '../../components/Header/Header';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import videoData from '../../data/video-details.json';
import './Home.scss';


function Home() {

    const handleOnClick = ()=> {
      //event.preventDefault(); if we had event in the params () above
      alert("This is where we will be able to upload videos");
    };
  
    const[selected, setSelected] = useState(videoData[0]);
  
    const videos = videoData.filter((d) => d!== selected); 
    // this makes sure that doesnt display the selected video in the thumbnail list
  
  
    return (
      <>
        <Header myHandlerFunction={handleOnClick}/>
        <HeroVideo selected={selected} />
  
        <div className="desktop-wrapper">
        <div className="left-wrapper">
        <Hero selected={selected}/>
        
        <Comments selected={selected} />
        </div>
  
        <Thumbnails videos={videos} setSelected={setSelected} />
        </div>
      </>
    );
  }

export default Home;


