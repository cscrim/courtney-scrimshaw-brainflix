import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg';
import userAvatar from '../../assets/images/Mohan-muruge.jpg';
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
                <input type="text" placeholder="Search" />
            </form>
        </div>
        <div className="header__avatar">
            <img src={userAvatar} alt="user avatar" />
        </div>
        </div>
        <div className="header__button">
      <button onClick={myHandlerFunction}>UPLOAD</button>
      </div>
    </header>
  )
};

export default Header;












// type rfce and hit enter to import this default template
// import React from 'react'

// function componentName() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default componentName
