import "./HeroVideo.scss";

function HeroVideo({ selected }) {
  if (!selected) {
    return <div>Loading.. </div>;
  }

  const baseURL = import.meta.env.VITE_BASE_URL

  return (
    <div className="hero__video-container">
      <video
        className="hero__video"
        src={selected.video}
        alt={selected.title}
        // poster={`http://localhost:8080${selected.image}`}
        poster={`${baseURL}${selected.image}`}
        controls
      ></video>
    </div>
  );
}

export default HeroVideo;
