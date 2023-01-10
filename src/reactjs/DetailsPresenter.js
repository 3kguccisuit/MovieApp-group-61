import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailsView from '../views/DetailsView';
import * as MovieAPI from '../MovieAPI';
import { useNavigate } from 'react-router-dom';
import Message from './messagePresenter';
import { UserAuth } from '../Context/authContext';
import { updateFirebaseAdd } from '../updateDatabase';

const Details = (props) => {

    const location = useLocation();
    const [detailedMovie, setDetailedMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = UserAuth();
    
    const prevQuery = location.state.prevQuery;
    const prevCategory = location.state.prevCategory;
    const navigate = useNavigate();

    //notification
    const [message, setMessage] = useState('');
    const [messageType, setmMessageType] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const test = await MovieAPI.getMovieDetails(location.state.id);
            setDetailedMovie(test);
            setLoading(false)
        }

        fetchData();
    }, []);

    const goBack = () => {
        navigate('/', {
            state: {
                prevQuery: prevQuery,
                prevCategory: prevCategory
            }
        });
    }

    const addToWatchlist = (Poster, Title, Type, imdbID) => {
        const movieToAdd = {
            Poster: Poster,
            Title: Title,
            Type: Type,
            imdbID: imdbID
        }
        if (!user) {
            //alert("Log in to save to watchlist")
            setMessage("Log in to save to watchlist");
            setmMessageType(2);
            return;
        }
        if (props.model.addMovie(movieToAdd) != -1) {
            props.model.addMovie(movieToAdd)
            setMessage(`${Title} has been added`);
            setmMessageType(1);
        }
        updateFirebaseAdd(props.model.movies, user);
    }

    return (
        <>
            <DetailsView
                title={detailedMovie.Title}
                poster={detailedMovie.Poster}
                year={detailedMovie.Year}
                released={detailedMovie.Released}
                runtime={detailedMovie.Runtime}
                genre={detailedMovie.Genre}
                plot={detailedMovie.Plot}
                imdbRating={detailedMovie.imdbRating}
                Type={detailedMovie.Type}
                actors={detailedMovie.Actors}
                language={detailedMovie.Language}
                imdbID={detailedMovie.imdbID}
                loading={loading}
                onGoback={goBack}
                onAddToWatchlist={addToWatchlist} />
            {!loading && <Message
                message={message}
                timeout={3000}
                type={messageType}
                key={Date.now()} />}

        </>
    );

}
export default Details;