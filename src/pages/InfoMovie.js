import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

// style

import '../styles/app.scss'

const InfoMovie = () => {

  let params = useParams();

  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`).then((response) => {
            setMovie(response.data)
        })

        axios
        .get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.REACT_APP_IMDB_API_KEY}`)
        .then((response) => {
          setVideos(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
        });
    },[params.id])

    console.log(videos);
  return (
    <div>

     {movie ? (
        <div className='wrapper-info'>
          <div className="i-flex">
            <div className="img">
              <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            </div>
            <div className="info">
              <h2>{movie?.title}</h2>
              <p>{movie?.overview}</p>
              <p className='c-gray'>Released: {movie?.release_date}</p>
              <p className='c-gray'>Rating: {movie?.vote_average}</p>
            </div>
          </div>
          {videos.length > 0 && (
            <div className='i-videos'>
              <h2>Videos</h2>
              <div className='g-videos'>
                {videos.map((video) => (
                  <div key={video.key}>
                    <iframe
                      title={video.name}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default InfoMovie