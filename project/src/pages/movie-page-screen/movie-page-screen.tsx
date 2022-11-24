import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Logo, LogoLight } from '../../components/logo/logo';
import TabsComponent from '../../components/tabs-component/tabs-component';
import SignOut from '../../components/sign-out-component/sign-out-component';
// import LoadingScreen from '../loading-screen/loading-screen';
import { getFavoriteCount, getFilm } from '../../store/list-data/selectors';
// import { getIsFounded, getIsLoaded } from '../../store/film-data/selectors';
import { getFilmListMore } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-processes/selectors';
import { setDataLoadedStatus } from '../../store/list-data/list-data';
import { changeFilmTab } from '../../store/film-data/film-data';
import { AppRoute } from '../../const';
import { fetchFilmByID, fetchReviewsByID } from '../../store/api-actions';
import MoreFilmComponent from '../../components/more-film-component/more-film-component';
import { StatusFilm } from '../../types/status';
import { setFavoriteCount } from '../../store/list-data/list-data';
import { changeFilmStatusToView } from '../../store/api-actions';

function MoviePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filmListMore = useAppSelector(getFilmListMore);
  const favoriteCount = useAppSelector(getFavoriteCount);

  // const isLoaded = useAppSelector(getIsLoaded);
  // const isFounded = useAppSelector(getIsFounded);

  useEffect(() => {
    dispatch(setDataLoadedStatus(true));
    dispatch(changeFilmTab('Overview'));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchReviewsByID(id.toString()));
    dispatch(setDataLoadedStatus(false));
  }, [id, authorizationStatus, dispatch]);

  // if (!isFounded) {
  //   return <LoadingScreen />;
  // }

  // if (!isLoaded) {
  //   return <LoadingScreen />;
  // }

  const onFavoriteClick = () => {
    const filmStatus: StatusFilm = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    dispatch(changeFilmStatusToView(filmStatus));

    if (film?.isFavorite) { dispatch(setFavoriteCount(favoriteCount - 1)); }
    else { dispatch(setFavoriteCount(favoriteCount + 1)); }
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
            <Logo />

            <SignOut />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{ film?.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ film?.genre }</span>
                <span className="film-card__year">{ film?.released }</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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
        <MoreFilmComponent filmList={ filmListMore }/>

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

export default MoviePage;
