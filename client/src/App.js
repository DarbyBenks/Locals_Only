import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import './style.css';
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import { useEffect } from 'react';
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  
 
  useEffect(() => {
    fetch('/posts')
    .then(res => res.json())
    .then(data => console.log(data))
 }, [])

const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  
  return (
    <Router>
      <nav id='navBar' textDecorationStyle="none"> 
        <ul id='ul_nav'>
        <Link to="/" className='nav'> Home </Link>
        <Link to="/about" className='nav'> About </Link>
        <Link to ="/profile" className='nav'> Profile </Link>
        </ul> 
        <LoginButton />
        <LogoutButton />
       </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
