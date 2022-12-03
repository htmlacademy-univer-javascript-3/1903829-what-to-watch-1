import { useAppSelector } from '../../hooks';
import { LogoComponent, LogoLightComponent } from '../../components/logo-component/logo-component';
import FilmCardFavouriteComponent from '../../components/favourite-film-card-component/favourite-film-card-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';
import { getFavoriteFilms } from '../../store/selectors';

function MyList(): JSX.Element {
  const favoriteFilm = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{ favoriteFilm.length }</span></h1>
        <SignOutComponent />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          { favoriteFilm.map((film) => <FilmCardFavouriteComponent key={ film.id } id={ film.id } title={ film.name } previewImage={ film.previewImage }/>) }
        </div>
      </section>

      <footer className="page-footer">
        <LogoLightComponent />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
