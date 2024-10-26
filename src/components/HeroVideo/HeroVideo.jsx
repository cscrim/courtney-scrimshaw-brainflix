import "./HeroVideo.scss";

function HeroVideo({ selected }) {

    // const formatTime = (timestamp) => {
    //   const date = new Date(timestamp);
  
    //   const month = date.getMonth() + 1;
    //   const day = date.getDate();
    //   const year = date.getFullYear();
  
    //   return `${month}/${day}/${year}`;
  
    return (


<div className="hero__video-container">
        <video
          className="hero__video"
          src={selected.video}
          alt={selected.title}
          poster={selected.image}
          controls
        ></video>
      </div>

);
}

export default HeroVideo;



