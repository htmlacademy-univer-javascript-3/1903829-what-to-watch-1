import { Logo, LogoLight } from '../../components/logo/logo';
import FavoriteFilms from '../../types/favorite-films';
import FilmCardFavourite from '../../components/favourite-film-card/favourite-film-card';

type MyListProps = {
  myList: FavoriteFilms[],
}

function MyList({ myList }: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#todo" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          { myList.map((film) => <FilmCardFavourite key={ film.id } name={ film.name } previewImage={ film.previewImage }/>) }
        </div>
      </section>

      <footer className="page-footer">
        <LogoLight />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
