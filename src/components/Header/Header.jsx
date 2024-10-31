import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg';
import userAvatar from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/images/search.svg';
import uploadIcon from '../../assets/images/upload.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header({ myHandlerFunction }) {
  // we can also reference it here
  // const buttonClick = () => {
  // handleOnClick }

  return (
    <header className="header">
        <div className="header__logo">
            <img src={BrainFlixLogo} alt="BrainFlix Logo" />
        </div>
        <div className="header__search-container">
        <div className="header__search-bar">
            <form>
              <div className="header__search-wrapper">
                <div className="header__search-icon">
                    <img src={searchIcon} alt="search icon" />
                </div>
                <input type="text" placeholder="Search" />
                </div>
            </form>
        </div>
        <div className="header__avatar">
            <img src={userAvatar} alt="user avatar" />
        </div>
        </div>
        {/* <div className="header__button">
      <button onClick={myHandlerFunction}>
      
        <img src={uploadIcon} alt="upload icon" className="upload-icon" />
        <span>UPLOAD</span></button>
      </div> */}

      <div className = "header__button">
        <Link to="/uploads" className="header__upload">
        <img src={uploadIcon} alt="upload icon" classname="upload-icon" />
        <span>UPLOAD</span>
        </Link>
      </div>




      {/* <div className="header__avatar-tablet">
        <img src={userAvatar} alt="user avatar tablet and desktop" />
      </div> */}
    </header>
  )
};

export default Header;










