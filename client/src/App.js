import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import './style.css';
function App() {
  return (
    <Router>
      <nav id='navBar' textDecorationStyle="none"> 
        <ul id='ul_nav'>
        <Link to="/" className='nav'> Home </Link>
        <Link to="/about" className='nav'> About </Link>
        </ul>
       </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
