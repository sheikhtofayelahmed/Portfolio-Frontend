
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details/Details';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/projects/:id' element={<Details></Details>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
