import React, { useEffect, useState } from 'react';
import axios from "axios";
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

// Adding Style
import '../styles/search.scss';

// Components
import requests from '../Request';


const Search = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
      axios.get(requests.requestSuccess).then((response) => {
          setMovies(response.data.results)
      })
  },[])

  const submitHendler = async (e) => {
    e.preventDefault();
      try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&query=${query}&language=en-US&page=1`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="c-serach header">
      <div className="img">
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
          <div className="bg-img"></div>
      </div>
      <div className="form-search">
        <form onSubmit={submitHendler}>
          <input onChange={(e) => setQuery(e.target.value)} type="text" value={query} />
          <FaSearch />
        </form>
      </div>
      </div>
      <div className='c-search'>
        
      {query.length > 0 && (
        <>
          <h2>Search</h2>
          <div className="grid-show">
            {results.map((item, id) => (
              <Link to={'/movie/' + item.id} className='card' key={id}>
                <p className='title'>{item?.title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={''} />
              </Link>
            ))}
          </div>
        </>
      )}
      {!query.length > 0 && (
        <>
        <h2>New</h2>
        <div className="grid-show">
          {movies.map((item, id) => (
              <Link to={'/movie/' + item.id} className='card' key={id}>
                <p className='title'>{item?.title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={''} />
              </Link>
            ))}
        </div>
        </>
      )}
    </div>
   </>
  )
}

export default Search