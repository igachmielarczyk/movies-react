import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// Adding Style
import '../styles/account.scss';
import '../styles/row.scss';

const SavedShows = () => {

    const [movies, setMovies] = useState([])
    const {user} = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`);
    const deleteShow = async (passedID, e) => {
        e.preventDefault(); 
        try {
            const result = movies.filter((item) => item.id !== passedID);
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='saved-show'>
        <h2>My shows</h2>
        <div className="grid-show">
            {movies.map((item, id) => (
                <Link to={'/movie/' + item.id} className='card'  key={id}>
                    <p className='title'>{item?.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${item?.img}`} alt={item?.title} />
                    <p onClick={(e) => deleteShow(item.id, e)} className="heart-wrap i-close">
                        <AiOutlineClose /> 
                    </p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SavedShows