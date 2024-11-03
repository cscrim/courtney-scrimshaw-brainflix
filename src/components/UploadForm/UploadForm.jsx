import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import "./UploadForm.scss";

function UploadForm() {
  const navigate = useNavigate();

  // I set this up to have useState capture the data, but I realize right now it's not going anywhere! 

  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your video was submitted successfully!");
    navigate("/");
  };

  const handleTitle = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setVideoDescription(event.target.value);
  };

  return (
    <div className="upload-form__container">
      <div className="desktop-wrapper">
      <div className="upload__title-image">
        <h2>Upload Video</h2>
        <div className="upload__thumbnail-content">
        <div className="upload__img">
          <h3>VIDEO THUMBNAIL</h3>
          <img
            src={uploadImg}
            alt="thumbnail-img"
            className="upload-thumbnail"
          />
          </div>
        </div>
      </div>

      <div className="upload__form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__fields">
          <div className="form__title">
            <label htmlFor="videoTitle">TITLE YOUR VIDEO</label>
            <input
              type="text"
              id="videoTitle"
              name="videoTitle"
              placeholder="Add a title to your video"
              value={videoTitle}
              onChange={handleTitle}
            />
          </div>
          <div className="form__description">
            <label htmlFor="videoDescription">ADD A VIDEO DESCRIPTION</label>
            <textarea
              id="videoDescription"
              name="videoDescription"
              placeholder="Add a description to your video"
              value={videoDescription}
              onChange={handleDescription}
            ></textarea>
          </div>
          </div>
          
          <div className="form__buttons">
            <button type="submit" className="publish-button">
              PUBLISH
            </button>
            <Link to="/" className="cancel-button">
              CANCEL
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
