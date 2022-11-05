import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LogoLight } from '../../components/logo/logo';
import WelcomeScreenComponent from '../../components/welcome-screen-component/welcome-screen-component';
import MovieList from '../../components/movie-list/movie-list';
import { getAuthorizationStatus } from '../../store/user-processes/selectors';
import { AuthorizationStatus } from '../../const';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

function WelcomeScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  return (
    <>
      <WelcomeScreenComponent />

      <div className="page-content">
        <MovieList />

        <footer className="page-footer">
          <LogoLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default WelcomeScreen;
