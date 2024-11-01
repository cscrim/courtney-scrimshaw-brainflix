import "./Thumbnails.scss";


function Thumbnails({ videos, setSelected }) {
  return (
    <div className="thumbnails">
      <div className="thumbnails__heading">
        <h2>NEXT VIDEOS</h2>
      </div>
      <ul className="thumbnails__list">
        {videos.map((video) => (
          <li
            className="thumbnails__item"
            key={video.id}
            onClick={() => {
              setSelected(video.id);
            }}
          >
            <img
              src={video.image}
              alt={video.title}
              className="thumbnails__img"
            />
            <div className="thumbnails__details">
              <h2 className="thumbnails__title">{video.title}</h2>
              <p className="thumbnails__channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Thumbnails;
