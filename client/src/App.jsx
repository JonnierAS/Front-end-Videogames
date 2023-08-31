import { Routes, Route} from "react-router-dom";


import LandingPage from './views/Landing/LandingPage';
import Home from './views/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Create from "./views/Create/Create"
import Detail from "./views/Detail/Detail"
import Footer from "./views/Footer/Footer";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/" element={<Navbar />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/create' element={<Create />} />
        <Route path='/game/:id' element={<Detail />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
