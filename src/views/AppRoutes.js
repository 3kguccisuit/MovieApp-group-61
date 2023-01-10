import LogIn from "../reactjs/LogInPresenter";
import SearchMovie from "../reactjs/SearchMoviePresenter";
import Watchlist from "../reactjs/WatchlistPresenter";
import  Register   from "../reactjs/RegisterPresenter";
import Account from "../reactjs/AccountPresenter";
import Details from "../reactjs/DetailsPresenter";

const AppRoutes = (props) => { // accept movieModel prop as argument
  const { movieModel } = props; // destructure movieModel prop

  return [
    {
      index: true,
      element: <SearchMovie model={movieModel} />
    },
    {
      path: '/LogIn',
      element: <LogIn />
    },
    {
      path: '/Watchlist',
      element: <Watchlist model={movieModel} />
    },
    {
      path: '/Register',
      element: <Register />
    },
    {
      path: '/Account',
      element: <Account />
    },
    {
      path: '/Details',
      element: <Details model={movieModel} />
    },
  ];
};

export default AppRoutes;

