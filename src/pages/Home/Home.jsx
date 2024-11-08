import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import "./Home.scss";

// const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

// const baseURL = "http://localhost:8080/";

const baseURL = import.meta.env.VITE_BASE_URL;

// const apiKey = "688fc29d-14c4-434a-9e30-da14fc78d4be";

function Home() {

  const { videoId } = useParams();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  const getVideos = async () => {
    try {
      // const response = await axios.get(`${baseURL}videos?api_key=${apiKey}`);

      const response = await axios.get(`${baseURL}videos`);

      setVideos(response.data);

      const defaultVideo = response.data[0];
      setSelectedVideo(defaultVideo);

      await getDetails(defaultVideo.id);
    } catch (error) {
      console.log("error getting videos", error);
    }
  };


  const getDetails = async (id) => {
    try {
      // const response = await axios.get(
      //   `${baseURL}videos/${id}?api_key=${apiKey}`
      // );

      const response = await axios.get(`${baseURL}videos/${id}`);

      setSelectedVideo(response.data);
    } catch (error) {
      console.log("error getting video details", error);
    }
  };


  useEffect(() => {
    getVideos();
  }, []);


  useEffect(() => {
    if (videoId) {
      getDetails(videoId);
    } else {
      const defaultVideo = videos[0];
      if (defaultVideo) {
        getDetails(defaultVideo.id);
      }
    }
  }, [videoId, videos]);


  const handleClick = (id) => {
    navigate(`/videos/${id}`);
    getDetails(id);
  };


  let filteredVideos = [];

  if (selectedVideo) {
    filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);
  } else {
    filteredVideos = videos;
  }


  let heroVideoDisplay;

  if (selectedVideo) {
    heroVideoDisplay = <HeroVideo selected={selectedVideo} />;
  } else {
    heroVideoDisplay = <div>Loading...</div>;
  }


  return (
    <>
      <Header />
      {heroVideoDisplay}
      <div className="desktop-wrapper">
        <div className="left-wrapper">
          <Hero selected={selectedVideo} />
          <Comments selected={selectedVideo} />
        </div>
        <Thumbnails videos={filteredVideos} setSelected={handleClick} />
      </div>
    </>
  );
}

export default Home;
