import { LogoComponent } from '../../components/logo-component/logo-component';
import AddReviewComponent from '../../components/add-review-component/add-review-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/list-data/selectors';

function AddReview(): JSX.Element {
  const film = useAppSelector(getFilm);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={ film?.backgroundImage } alt={ film?.name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoComponent />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{ film?.name }</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <SignOutComponent />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={ film?.posterImage } alt={ film?.name } width="218" height="327" />
        </div>
      </div>

      <AddReviewComponent />
    </section>
  );
}

export default AddReview;
