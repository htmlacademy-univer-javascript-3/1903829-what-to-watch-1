import TypeFilm from '../../types/film-type';
import Reviews from '../../types/reviews';
import MoviePageComponent from '../movie-page-component/movie-page-component';
import AddDetails from '../details-component/details-component';
import ReviewsComponent from '../reviews/reviews';


type TabsComponentProps = {
  film?: TypeFilm,
  reviews: Reviews,
  chooseTab: string,
  updateTab: (tab: string) => void,
}

function TabsComponent({ film, reviews, chooseTab, updateTab }: TabsComponentProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={ `film-nav__item ${ chooseTab === 'Overview' && 'film-nav__item--active' }` }>
            <a href="#todo" className="film-nav__link" onClick={ (evt) => { evt.preventDefault(); updateTab('Overview'); } }>
              Overview
            </a>
          </li>
          <li className={ `film-nav__item ${ chooseTab === 'Details' && 'film-nav__item--active' }` }>
            <a href="#todo" className="film-nav__link" onClick={ (evt) => { evt.preventDefault(); updateTab('Details'); } }>
              Details
            </a>
          </li>
          <li className={ `film-nav__item ${ chooseTab === 'Reviews' && 'film-nav__item--active' }` }>
            <a href="#todo" className="film-nav__link" onClick={ (evt) => { evt.preventDefault(); updateTab('Reviews'); } }>
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
