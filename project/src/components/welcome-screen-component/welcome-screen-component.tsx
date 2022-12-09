import { LogoComponent } from '../logo-component/logo-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';
import { useAppSelector } from '../../hooks';
import { getFilm, getFavoriteCount, getAuthorizationStatus } from '../../store/selectors';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

function WelcomeScreenComponent(): JSX.Element {
  const film = useAppSelector(getFilm);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const favoriteCount = useAppSelector(getFavoriteCount);

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={ film?.backgroundImage } alt={ film?.name } />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <LogoComponent />

        <SignOutComponent />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={ film?.posterImage } alt={ film?.name } width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{ film?.name }</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{ film?.genre }</span>
              <span className="film-card__year">{ film?.released.toString() }</span>
            </p>

            <FilmCardButtons film={ film } favoriteType={ 'PROMO' }
              favoriteCount={ favoriteCount } authStatus={ authStatus }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeScreenComponent;
