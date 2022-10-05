import { LogoLight } from '../../components/logo/logo';
import WelcomeScreenComponent from '../../components/welcome-screen-component/welcome-screen-component';
import MovieList from '../../components/movie-list/movie-list';
import { TypeFilm } from '../../types/film-type';
import { TypeGenres } from '../../types/genre-type';

type WelcomeScreenProps = {
  title: string,
  genre: string,
  year: number,
  films: TypeFilm[],
  genres: TypeGenres[],
}

function WelcomeScreen({ title, genre, year, films, genres }: WelcomeScreenProps): JSX.Element {
  return (
    <>
      <WelcomeScreenComponent title={ title } genre={ genre } year={ year }/>

      <div className="page-content">
        <MovieList films={ films } genres={ genres }/>

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
