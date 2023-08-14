const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=2`,
 
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,


    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,

    requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`,

    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&query=action&page=1&include_adult=false`,


    // niby api wyszukiwanie po wszystkich filmach do sprwadzenia gdy będziesz robić input search
    requestAll: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&append_to_response=credits,videos,images`,
    requestSuccess: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  };

  export default requests