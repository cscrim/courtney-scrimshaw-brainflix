import "./Thumbnails.scss";


function Thumbnails({ videos, setSelected }) {
  return (
    <div className="thumbnails">
        <ul className="thumbnails__list">
            {  videos.map((video) =>  (
                <li 
                className="thumbnail__item"
                key={video.id}
                onClick={() => {
                    setSelected(video);
                }}
                >
                  <img src={video.image} alt={video.title} className="thumbnails__img" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Thumbnails;
