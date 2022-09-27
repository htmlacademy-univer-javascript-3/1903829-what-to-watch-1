import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import SignIn from '../../pages/sign-in-screen/sign-in-screen';
import MyList from '../../pages/my-list-screen/my-list-screen';
import Film from '../../pages/movie-page-screen/movie-page-screen';
import AddReview from '../../pages/add-review-screen/add-review-screen';
import Player from '../../pages/player-screen/player-screen';

type filmInfo = {
  title: string,
  genre: string;
  year: number;
}

function App(filmInfoProps: filmInfo): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          path = { AppRoute.Main }
          element = { <WelcomeScreen filmInfo = { filmInfoProps }/> }
        </Route>
        <Route>
          path = { AppRoute.SignIn }
          element = { <SignIn /> }
        </Route>
        <Route>
          path = { AppRoute.MyList }
          element = { <MyList />}
        </Route>
        <Route>
          path = { AppRoute.Film }
          element = { <Film />}
        </Route>
        <Route>
          path = { AppRoute.AddReview }
          element = { <AddReview />}
        </Route>
        <Route>
          path = { AppRoute.Player }
          element = { <Player /> }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
