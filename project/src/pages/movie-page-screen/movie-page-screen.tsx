import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LogoComponent, LogoLightComponent } from '../../components/logo-component/logo-component';
import TabsComponent from '../../components/tabs-component/tabs-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';
import FilmCardComponent from '../../components/film-card-component/film-card-component';
import { getIsLoadingStatus, getFavoriteCount, getFilm, getFilmListMore, getAuthorizationStatus } from '../../store/selectors';
import { changeFilmTab } from '../../store/film-data';
import { fetchMoreFilmByID, fetchFilmByID, fetchReviewsByID, fetchFavoriteFilmsAction } from '../../store/api-actions';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import LoadingScreen from '../loading-screen/loading-screen';

function MoviePageScreen(): JSX.Element {
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filmListMore = useAppSelector(getFilmListMore);
  const favoriteCount = useAppSelector(getFavoriteCount);
  const isLoadingStatus = useAppSelector(getIsLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilmTab('Overview'));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchReviewsByID(id.toString()));
    dispatch(fetchMoreFilmByID(id.toString()));
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [id, authorizationStatus, dispatch]);

  let countMoreFilm = filmListMore.length;
  if (countMoreFilm > 4) { countMoreFilm = 4; }

  if (isLoadingStatus) {
    return <LoadingScreen />;
  }

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
                <FilmCardButtons film={ film } favoriteType={ 'PROMO' }
                  favoriteCount={ favoriteCount } authStatus={ authorizationStatus }
                />
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <Link
                    to={ `${ AppRoute.Film }/${ id }${ AppRoute.AddReview }` }
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
            { filmListMore.slice(0, countMoreFilm).map((movie) => (<FilmCardComponent key={ movie.id } id={ movie.id } name={ movie.name } previewImage={ movie.previewImage } srcVideo={ movie.videoLink }/>)) }
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

export default MoviePageScreen;
