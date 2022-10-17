import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import SignIn from '../../pages/sign-in-screen/sign-in-screen';
import MyList from '../../pages/my-list-screen/my-list-screen';
import Film from '../../pages/movie-page-screen/movie-page-screen';
import AddReview from '../../pages/add-review-screen/add-review-screen';
import Player from '../../pages/player-screen/player-screen';
import Error from '../error/error';
import PrivateRoute from '../../components/private-route/private-route';
import { TypeFilm } from '../../types/film-type';
import { FavoriteFilms } from '../../types/favorite-films';
import Reviews from '../../types/reviews';

type filmInfo = {
  title: string,
  genre: string,
  year: number,
  films: TypeFilm[],
  favouriteList: FavoriteFilms[],
  reviews: Reviews;
}

function App({ title, genre, year, films, favouriteList, reviews }: filmInfo): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = { AppRoute.Main }
          element = { <WelcomeScreen title={ title } genre={ genre } year={ year } films={ films } /> }
        />
        <Route
          path = { AppRoute.SignIn }
          element = { <SignIn /> }
        />
        <Route
          path = { AppRoute.MyList }
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList myList={ favouriteList }/>
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.Film }
          element = { <Film films={ films } reviews={ reviews }/> }
        />
        <Route
          path = { AppRoute.AddReview }
          element = { <AddReview />}
        />
        <Route
          path = { AppRoute.Player }
          element = { <Player /> }
        />
        <Route
          path = { '*' }
          element = { <Error /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
