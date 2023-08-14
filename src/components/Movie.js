import React, { useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


// Adding Style
import '../styles/row.scss';
import { Link } from 'react-router-dom';

const Movie = ({item}) => {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async (e) => {
      e.preventDefault(); 
      if(user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      } else {
          alert('please log in to save a movie')
      }
    }

  return (
    <>
      <Link to={'/movie/' + item.id} className='card'>
          <p className='title'>{item?.title}</p>
          <img src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
          <p onClick={saveShow} className="heart-wrap">
              {like ? <FaHeart /> : <FaRegHeart />} 
          </p>
      </Link>
    </>
  )
}

export default Movie