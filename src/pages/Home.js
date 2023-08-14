import React from 'react';

// Adding Components
import Main from '../components/Main';
import Row from '../components/Row';

// Adding Style
import '../styles/home.scss';

import requests from '../Request';

const Home = () => {
  return (
    <>
        <Main />
        <Row title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        {/* <Row title='Horror' fetchURL={requests.requestHorror} /> */}
    </>
  )
}

export default Home