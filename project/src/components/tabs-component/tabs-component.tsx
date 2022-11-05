import TypeFilm from '../../types/film-type';
import Reviews from '../../types/reviews';
import { useAppSelector, useAppDispatch } from '../../hooks';
import MoviePageComponent from '../movie-page-component/movie-page-component';
import AddDetails from '../details-component/details-component';
import ReviewsComponent from '../reviews/reviews';
import { changeFilmTab } from '../../store/film-data/film-data';
import { getChooseTab } from '../../store/app-process/selectors';

type TabsComponentProps = {
  film: TypeFilm | null,
  reviews: Reviews,
}

function TabsComponent({ film, reviews }: TabsComponentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const chooseTab = useAppSelector(getChooseTab);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={ `film-nav__item ${ chooseTab === 'Overview' && 'film-nav__item--active' }` }>
            <a href="#todo" className="film-nav__link" onClick={ (evt) => { evt.preventDefault();
              dispatch(changeFilmTab({currentTab: 'Overview'})); } }
            >
              Overview
            </a>
          </li>
          <li className={ `film-nav__item ${ chooseTab === 'Details' && 'film-nav__item--active' }` }>
            <a href="#todo" className="film-nav__link" onClick={ (evt) => { evt.preventDefault();
              dispatch(changeFilmTab({currentTab: 'Details'})); } }
            >
              Details
            </a>
          </li>
          <li className={ `film-nav__item ${ chooseTab === 'Reviews' && 'film-nav__item--active' }` }>
            <a href="#todo" className="film-nav__link" onClick={ (evt) => { evt.preventDefault();
              dispatch(changeFilmTab({currentTab: 'Reviews'})); } }
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
  );
}

export default TabsComponent;
