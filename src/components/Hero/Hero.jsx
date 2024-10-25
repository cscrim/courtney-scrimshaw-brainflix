import "./Hero.scss";

function Hero({ selected }) {

    console.log("video URL", selected.video);
  return (
    <div className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          src={selected.video}
          alt={selected.title}
          poster={selected.image}
          controls
        ></video>
      </div>
      <div className="hero__title-container">
        <h1>{selected.title}</h1>
      </div>
    </div>
  );
}

export default Hero;
