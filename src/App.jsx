import Home from './pages/Home/Home';
import Uploads from './pages/Uploads/Uploads';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home />} />
      <Route path ="/uploads" element = {<Uploads />} />
      <Route path="/videos/:videoId" element={<Home />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
