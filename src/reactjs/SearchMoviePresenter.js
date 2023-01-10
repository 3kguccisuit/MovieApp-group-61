import React, { useEffect, useState } from 'react';
import * as MovieAPI from '../MovieAPI';
import SearchMovieView from '../views/SearchMovieView';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchMovie = (props) => {
  const [query, setQuery] = useState('Harry');
  const [category, setCategory] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const [prevQuery, setPrevQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (location.state && location.state.prevQuery) {
        setPrevQuery(location.state.prevQuery);
        setQuery(location.state.prevQuery)
        setCategory(location.state.prevCategory)
        PreviousSearch();
      }
      else {
        const intialSearch = await MovieAPI.searchMovies("Harry", "movie");
        setMovies(intialSearch);
      }

      setLoading(false)
    }

    fetchData();
  }, [prevQuery]);

  const PreviousSearch = async () => {
    if (prevQuery) {
      setLoading(true);
      const prev = await MovieAPI.searchMovies(prevQuery, category);
      setMovies(prev)
      setLoading(false)
    }
  }

  const search = async (event) => {
    event.preventDefault();
    const results = await MovieAPI.searchMovies(query, category);
    setMovies(results);

  }

  const goToDetails = (id, prevQuery, prevCategory) =>{
    navigate('/Details',{
      state: {
        id: id ,
        prevQuery: prevQuery ,
        prevCategory: prevCategory
      }
    });
  }

  return (
    <>
      <SearchMovieView
        query={query}
        category={category}
        movies={movies}
        onQueryChange={(event) => setQuery(event.target.value)}
        onCategoryChange={(event) => setCategory(event.target.value)}
        onSearch={search}
        loading={loading}
        goToDetails={goToDetails}
      />
    </>
  );

}

export default SearchMovie;