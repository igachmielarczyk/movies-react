import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movie from './Movie';

// Adding Style
import '../styles/row.scss';

// Slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Row = ({title, fetchURL}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

  return (
    <div className='slider-row'>
        <h2>{title}</h2>
        <Splide 
            options={{
                perPage:5,
                pagination: false,
                drag: 'free',
                gap: '3rem',
                breakpoints: {
                    1680: {
                        perPage: 4,
                    },
                    1440: {
                        perPage: 3,
                    },
                    772: {
                        perPage: 2,
                    },
                    560: {
                        perPage: 1,
                    },
                }
            }}
        >
            {movies.map((item) => (
                <SplideSlide >
                    <Movie item={item} key={item?.id}/>
                </SplideSlide>
            ))}
        </Splide>
    </div>
  )
}

export default Row