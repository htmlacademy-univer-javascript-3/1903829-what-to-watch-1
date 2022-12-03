import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import StatusFilm from '../../types/status';
import { LogoComponent, LogoLightComponent } from '../../components/logo-component/logo-component';
import TabsComponent from '../../components/tabs-component/tabs-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';
import FilmCardComponent from '../../components/film-card-component/film-card-component';
import { getFavoriteCount, getFilm } from '../../store/selectors';
import { getFilmListMore } from '../../store/selectors';
import { getAuthorizationStatus } from '../../store/selectors';
import { setDataLoadedStatus } from '../../store/list-data';
import { changeFilmTab } from '../../store/film-data';
import { fetchFilmByID, fetchReviewsByID } from '../../store/api-actions';
import { setFavoriteCount } from '../../store/list-data';
import { changeFilmStatusToView } from '../../store/api-actions';
import { fetchMoreFilmByID } from '../../store/api-actions';

function MoviePage(): JSX.Element {
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filmListMore = useAppSelector(getFilmListMore);
  const favoriteCount = useAppSelector(getFavoriteCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDataLoadedStatus(true));
    dispatch(changeFilmTab('Overview'));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchReviewsByID(id.toString()));
    dispatch(setDataLoadedStatus(false));
    dispatch(fetchMoreFilmByID(id.toString()));
  }, [id, authorizationStatus, dispatch]);

  const onFavoriteClick = () => {
    const filmStatus: StatusFilm = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    dispatch(changeFilmStatusToView(filmStatus));

    if (film?.isFavorite) { dispatch(setFavoriteCount(favoriteCount - 1)); }
    else { dispatch(setFavoriteCount(favoriteCount + 1)); }
  };

  const navigate = useNavigate();
  const onClickPlay = () => {
    navigate(`/player/${ film?.id }`);
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={ film?.backgroundImage } alt={ film?.name } />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <LogoComponent />

            <SignOutComponent />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{ film?.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ film?.genre }</span>
                <span className="film-card__year">{ film?.released }</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={ onClickPlay }>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <button
                    className="btn btn--list film-card__button"
                    type="button"
                    onClick={ onFavoriteClick }
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
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <Link
                    to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <TabsComponent />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            { filmListMore.map((movie) => (<FilmCardComponent key={ movie.id } id={ movie.id } name={ movie.name } previewImage={ movie.previewImage } srcVideo={ movie.videoLink }/>)) }
          </div>
        </section>

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

export default MoviePage;
