import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reactjs from './components/Reactjs';
import CssWebsites from './components/CssWebsites';
import Javascriptnotes from './components/Javascriptnotes';
import Cascadingss from './components/Cascadingss';
import Footer from './components/Footer';
import Express from './components/Express';
import Npm from './components/Npm';

function App() {
  return (
    
    <BrowserRouter basename="/code-diary">
    <Navbar/>
    <Routes> 
    <Route path='/' element={<Home/>}  />
    <Route path='/reactjs' element={<Reactjs/>} />
    <Route path='/javascriptnotes' element={ <Javascriptnotes/> } />
    <Route path='/css-websites' element={ <CssWebsites/> } />
    <Route path='/cascaddingss' element={ <Cascadingss/> } />
    <Route path='/expressjs' element={<Express/> } />
    <Route path='/npm' element={<Npm/> } />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
