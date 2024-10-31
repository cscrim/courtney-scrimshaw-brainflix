import "./HeroVideo.scss";

function HeroVideo({ selected }) {
  if (!selected) {
    return <div>Loading.. </div>;
  }

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
