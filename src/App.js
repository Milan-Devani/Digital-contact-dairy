import './App.css';
import Home from './componetn/Page/Home';
import About from './componetn/Page/About';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componetn/Atoms/Navbar/Navbar';
import { NavData } from './componetn/Atoms/NavData';
import Contact from './componetn/Page/Contact';
// import Op from './componetn/Op';
// import Abc from './componetn/Abc';

function App() {
  return (
    <>
    {/* <Op/> */}
    {/* <Abc/> */}
      <Navbar data={NavData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
