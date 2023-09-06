import React, { useEffect, useState } from 'react'
import axios from "axios";
import request from '../Request'
import { Link } from 'react-router-dom';

const Main = () => {

    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, movies)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

  return (
    <div className='s-main'>
        <div className="img">
            <div className="bg-img"></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div className="info">
            <h2>{movie?.title}</h2>
            <div className="btn-wrapper">
                <button className="btn btn-white">Play</button>
                <button className="btn btn-outline">Watch Later</button>
                <Link to={`/movie/${movie?.id}`} className='btn btn-outline'>
                    Info
                </Link>
            </div>
            <p className='c-gray'>Released: {movie?.release_date}</p>
            <p className='c-gray'>Rating: {movie?.vote_average}</p>
            <p className='t-lg'>{truncateString(movie?.overview, 200)}</p>
        </div>
    </div>
  )
}

export default Main