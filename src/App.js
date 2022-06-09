
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <div className="ham">
        <Navbar></Navbar>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
