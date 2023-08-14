import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import {FaSearch} from 'react-icons/fa';

// Adding Style
import '../styles/_nav.scss';

const Navbar = () => {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='nav'>
      <Link to='/'>
        <h1>netflix</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/search'>
              <FaSearch></FaSearch>
          </Link>
          <Link to='/account'>
            <span className='btn btn-outline'>Account</span>
          </Link>
          <button onClick={handleLogout} className='btn btn-primary'>Log Out</button>
        </div> 
       ) : (
        <div>
          <Link to='/search'>
              <FaSearch></FaSearch>
          </Link>
          <Link to='/login'>
            <span className='btn btn-outline'>Sign In</span>
          </Link>
          <Link to='/signup'>
            <button className='btn btn-primary'>Sign Up</button>
          </Link>
        </div>
       )
      }
    </div>
  )
}

export default Navbar