import './UploadForm.scss';
import { Link } from 'react-router-dom';
import uploadImg from '../../assets/images/Upload-video-preview.jpg';


function UploadForm() {
  return (
    <div className="upload-form__container">
        <div className="upload__title-image">
        <h2>
            Upload Video
        </h2>
        <div className="upload__img">
            <h3>
                VIDEO THUMBNAIL
            </h3>
            <img src={uploadImg} alt="thumbnail-img" className="upload-thumbnail" />
        </div>
        </div>

        <div className="upload__form-container">
            <form className="form">
                <div className="form__title">
                    <label for="videoTitle">TITLE YOUR VIDEO</label>
                    <input type="text" id="videoTitle" name="videoTitle" placeholder="Add a title to your video" />
                </div>
                <div className="form__description">
                    <label for="videoDescription">ADD A VIDEO DESCRIPTION</label>
                    <textarea id="videoDescription" name="videoDescription" placeholder="Add a description to your video"></textarea> 

                </div>
                <div className="form__buttons">
                    <button type="submit" className="publish-button">
                        PUBLISH
                    </button>
                    <Link to="/" className="cancel-button">CANCEL</Link>

                </div>
            </form>

        </div>
      
    </div>
  );
}

export default UploadForm
