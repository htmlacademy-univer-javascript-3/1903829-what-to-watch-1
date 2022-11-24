import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import SignIn from '../../pages/sign-in-screen/sign-in-screen';
import MyList from '../../pages/my-list-screen/my-list-screen';
import Film from '../../pages/movie-page-screen/movie-page-screen';
import AddReview from '../../pages/add-review-screen/add-review-screen';
import Player from '../../pages/player-screen/player-screen';
import Error from '../error/error';
import PrivateRoute from '../../components/private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-processes/selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return ( <LoadingScreen /> );
  }

  return (
    <HistoryRouter history={ browserHistory }>
      <Routes>
        <Route path = { AppRoute.Main } element = { <WelcomeScreen /> } />
        <Route path = { AppRoute.SignIn } element = { <SignIn /> } />
        <Route path = { AppRoute.MyList }
          element={
            <PrivateRoute authorizationStatus={ authorizationStatus } >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}>
          <Route path={ ':id' } element={ <Film /> } />
        </Route>
        <Route
          path={ `/films/:id${ AppRoute.AddReview }` }
          element={
            <PrivateRoute
              authorizationStatus={ authorizationStatus }
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path = { AppRoute.Player } element = { <Player /> } />
        <Route path = { '*' } element = { <Error /> } />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
