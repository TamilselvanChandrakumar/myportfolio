
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import About from './screens/about/About';
import Hamburger from './components/hamburger/Hamburger';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hamburger' element={<Hamburger/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
