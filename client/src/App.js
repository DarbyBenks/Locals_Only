import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Posts from './Components/Posts';
import ErrorPage from './Components/ErrorPage';
import './style.css';
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import SinglePost from './Components/SinglePost';



function App() {

const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  
  return (
    <Router>
      <nav id='navBar' textDecorationStyle="none"> 
        <ul id='ul_nav'>
        <Link to="/" className='nav'> Home </Link>
        <Link to="/posts" className='nav'> Posts </Link>
        <Link to ="/profile" className='nav'> Profile </Link>
        </ul> 
        <LoginButton />
        <LogoutButton />
       </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts  />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<SinglePost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
