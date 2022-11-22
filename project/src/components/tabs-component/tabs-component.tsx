import { useAppSelector, useAppDispatch } from '../../hooks';
import MoviePageComponent from '../movie-page-component/movie-page-component';
import AddDetails from '../details-component/details-component';
import ReviewsComponent from '../reviews/reviews';
import { changeFilmTab } from '../../store/film-data/film-data';
import { getChooseTab, getReviews, getFilm } from '../../store/film-data/selectors';

function TabsComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  const chooseTab = useAppSelector(getChooseTab);
  const reviews = useAppSelector(getReviews);
  const film = useAppSelector(getFilm);

  return (
    <>
      <div className="film-card__poster film-card__poster--big">
        <img src={ film?.posterImage } alt={ film?.name } width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <nav className="film-nav film-card__nav">
          <ul className="film-nav__list">
            <li className={ `film-nav__item ${ chooseTab === 'Overview' && 'film-nav__item--active' }` }>
              <a href="/" className="film-nav__link" onClick={ (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab('Overview'));
              } }
              >
              Overview
              </a>
            </li>
            <li className={ `film-nav__item ${ chooseTab === 'Details' && 'film-nav__item--active' }` }>
              <a href="/" className="film-nav__link" onClick={ (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab('Details'));
              } }
              >
              Details
              </a>
            </li>
            <li className={ `film-nav__item ${ chooseTab === 'Reviews' && 'film-nav__item--active' }` }>
              <a href="/" className="film-nav__link" onClick={ (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab('Reviews'));
              } }
              >
              Reviews
              </a>
            </li>
          </ul>
        </nav>

        { chooseTab === 'Overview' &&
        <MoviePageComponent rating={ film?.rating } description={ film?.description } scoresCount={ film?.scoresCount }
          director={ film?.director } starring={ film?.starring }
        /> }

        { chooseTab === 'Details' &&
        <AddDetails director={ film?.director } starring={ film?.starring } released={ film?.released } genre={ film?.genre }
          runTime={ film?.runTime }
        /> }

        { chooseTab === 'Reviews' &&
        <ReviewsComponent reviews={ reviews }/> }

      </div>
    </>
  );
}

export default TabsComponent;
