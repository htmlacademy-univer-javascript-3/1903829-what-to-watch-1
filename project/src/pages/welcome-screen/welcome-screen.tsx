import { LogoLight } from '../../components/logo/logo';
import WelcomeScreenComponent from '../../components/welcome-screen-component/welcome-screen-component';
import MovieList from '../../components/movie-list/movie-list';
import { TypeFilm } from '../../types/film-type';

type WelcomeScreenProps = {
  title: string,
  genre: string,
  year: number,
  films: TypeFilm[],
}

function WelcomeScreen({ title, genre, year, films }: WelcomeScreenProps): JSX.Element {
  return (
    <>
      <WelcomeScreenComponent title={ title } genre={ genre } year={ year }/>

      <div className="page-content">
        <MovieList films={ films } />

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
