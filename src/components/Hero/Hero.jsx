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
        <div className="hero__details-container">
            <div className="hero__details-channel">
                <p>
                    {selected.channel}
                </p>
                <p>
                    {selected.timestamp}
                </p>
            </div>
            <div className="hero__details-views">
                <p>
                    {selected.views}
                </p>
                <p>
                    {selected.likes}
                </p>
            </div>
        </div>
        <div className="hero__description-container">
            <p className="hero__text">
                {selected.description}
            </p>
        </div>
      
    </div>
  );
}

export default Hero;
