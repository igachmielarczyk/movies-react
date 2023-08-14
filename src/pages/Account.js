import React from 'react'
import SavedShows from '../components/SavedShows'; 

// Adding Style
import '../styles/account.scss';

const Account = () => {
  return (
    <div className='account'>
      <div className="header">
        <div className="img">
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
            <div className="bg-img"></div>
        </div>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account