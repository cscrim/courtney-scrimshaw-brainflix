
import './App.scss'
import Header from './components/Header/Header';

function App() {

  const handleOnClick = ()=> {
    //event.preventDefault(); if we had event in the params () above
    alert("This is where we will be able to upload videos");
  };

  return (
    <>
      <Header myHandlerFunction={handleOnClick}/>
      
    </>
  );
}

export default App
