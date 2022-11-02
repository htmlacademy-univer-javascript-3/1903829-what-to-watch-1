import { LogoLight } from '../../components/logo/logo';
import WelcomeScreenComponent from '../../components/welcome-screen-component/welcome-screen-component';
import MovieList from '../../components/movie-list/movie-list';

function WelcomeScreen(): JSX.Element {
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
