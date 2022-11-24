import { Logo } from '../logo/logo';
import SignOut from '../../components/sign-out-component/sign-out-component';
import { useAppSelector } from '../../hooks';
import { getFilm, getFavoriteCount } from '../../store/list-data/selectors';
import { getAuthorizationStatus } from '../../store/user-processes/selectors';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setFavoriteCount } from '../../store/list-data/list-data';
import { changeFilmStatusToView } from '../../store/api-actions';
import { StatusFilm } from '../../types/status';

function WelcomeScreenComponent(): JSX.Element {
  const film = useAppSelector(getFilm);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const favoriteCount = useAppSelector(getFavoriteCount);
  const dispatch = useAppDispatch();

  const onAddFavoriteClick = () => {
    const filmStatus: StatusFilm = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    dispatch(changeFilmStatusToView(filmStatus));

    if (film?.isFavorite) {
      dispatch(setFavoriteCount(favoriteCount - 1));
    } else {
      dispatch(setFavoriteCount(favoriteCount + 1));
    }
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="https://10.react.pages.academy/static/film/preview/snatch.jpg" alt="Snatch" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <SignOut />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={ film?.posterImage } alt="Snatch" width="218" height="327" />
          </div>
          {/* "https://10.react.pages.academy/static/film/poster/Snatch.jpg" */}
          <div className="film-card__desc">
            <h2 className="film-card__title">{ film?.name }</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{ film?.genre }</span>
              <span className="film-card__year">{ film?.released.toString() }</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              {
                authStatus === AuthorizationStatus.Auth &&
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={ onAddFavoriteClick }
                >
                  {
                    film?.isFavorite ? <span>✓</span> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                  }
                  <span>My list</span>
                  <span className="film-card__count">{ favoriteCount }</span>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeScreenComponent;
