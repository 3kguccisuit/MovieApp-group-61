import React, { useState, useEffect } from 'react';
import WatchlistView from '../views/WatchlistView';
import { UserAuth } from '../Context/authContext';
import { updateFirebaseRemove } from '../updateDatabase';
import { updateModelfromFirebase } from '../updateDatabase';

const Watchlist = (props) => {
  const [rerender, setRerender] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { user } = UserAuth();



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await updateModelfromFirebase(user, props.model);
      setLoading(false)
    }

    fetchData();

    
  }, []);


  const onRemoveWatchlist = (movie) => {
    props.model.removeMovie(movie);
    updateFirebaseRemove(movie, user, props.model.movies);

    setRerender(!rerender);
  }

  // This method is called when the user selects a new category
  const onCategoryChange = event => {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <WatchlistView
        movies={props.model.movies}
        onRemoveWatchlist={onRemoveWatchlist}
        user={user}
        loading={loading}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
    </>
  );
};

export default Watchlist;
