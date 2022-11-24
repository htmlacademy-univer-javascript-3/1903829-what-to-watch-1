import { Logo, LogoLight } from '../../components/logo/logo';
import FilmCardFavourite from '../../components/favourite-film-card/favourite-film-card';
import SignOut from '../../components/sign-out-component/sign-out-component';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/list-data/selectors';
// import { getAuthorizationStatus } from '../../store/user-processes/selectors';

function MyList(): JSX.Element {
  const favoriteFilm = useAppSelector(getFavoriteFilms);
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);
  // const dispatch = useAppDispatch();

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{ favoriteFilm.length }</span></h1>
        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          { favoriteFilm.map((film) => <FilmCardFavourite key={ film.id } id={ film.id } name={ film.name } previewImage={ film.previewImage }/>) }
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
