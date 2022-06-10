
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      
    </div>
  );
}

export default App;
