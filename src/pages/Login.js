import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'

// Adding Style
import '../styles/sign.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };


  return (
    <>
      <div className="sign">
          <div className="img">
              <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
              <div className="bg-img"></div>
          </div>
          <div className="wrapper-form">
            <div className="box-form">
              <h1>Sign In</h1>
              {error ? <p className='info-error'>{error}</p> : null}
              <form onSubmit={handleSubmit}>
                  <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" placeholder='Email'
                  autoComplete='email'/>
                  <input onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" placeholder='Password'
                  autoComplete='current-password'/>
                  <button className="btn btn-primary">Sign In</button>
                  <div className="detail">
                      <div className="info">
                          <label className="custom-checkbox">
                              <input type="checkbox" />
                              <span className="checkbox"></span>
                              Remember me
                          </label>
                          <p>Need Help?</p>
                      </div>
                      <p>
                          <span>New to Netflix?</span>
                          <Link to='/signup'> Sign Up</Link>
                      </p>
                  </div>
              </form>
            </div>
          </div>
      </div>
  </>
  )
}

export default Login