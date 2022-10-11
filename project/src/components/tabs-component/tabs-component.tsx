import { TypeFilm } from '../../types/film-type';
import Reviews from '../../types/reviews';
import MoviePageComponent from '../movie-page-component/movie-page-component';
import AddDetails from '../details-component/details-component';
import ReviewsComponent from '../reviews/reviews';


type TabsComponentProps = {
  film?: TypeFilm;
  reviews: Reviews;
}

function TabsComponent({ film, reviews }: TabsComponentProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <a href="#todo" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <a href="#todo" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="#todo" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <MoviePageComponent rating={ film?.rating } description={ film?.description } scoresCount={ film?.scoresCount }
        director={ film?.director } starring={ film?.starring }
      />

      <AddDetails director={ film?.director } starring={ film?.starring } released={ film?.released } genre={ film?.genre }
        runTime={ film?.runTime }
      />

      <ReviewsComponent reviews={ reviews }/>
    </div>
  );
}

export default TabsComponent;
