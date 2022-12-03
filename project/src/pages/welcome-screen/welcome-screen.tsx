import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LogoLightComponent } from '../../components/logo-component/logo-component';
import WelcomeScreenComponent from '../../components/welcome-screen-component/welcome-screen-component';
import MovieListComponent from '../../components/movie-list-component/movie-list-component';
import { getAuthorizationStatus } from '../../store/selectors';
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
        <MovieListComponent />

        <footer className="page-footer">
          <LogoLightComponent />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default WelcomeScreen;
