import "./Hero.scss";

function Hero({ selected }) {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;

  }

    
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
                    <span>By {selected.channel}</span>
                </p>
                <p>
                    {formatTime (selected.timestamp)}
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
