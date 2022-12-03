import TypeFilm from '../../types/film-type';
import FilmCardComponent from '../film-card-component/film-card-component';
import GenresComponent from '../genres-component/genres-component';
import ShowMoreComponent from '../show-more-component/show-more-component';
import { useAppSelector } from '../../hooks';
import { getCountCard, getFilteredFilms } from '../../store/list-data/selectors';

function MovieListComponent(): JSX.Element {
  const countCard = useAppSelector(getCountCard);
  const filteredFilm = useAppSelector(getFilteredFilms);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresComponent />

      <div className="catalog__films-list">
        { filteredFilm.slice(0, countCard).map((film: TypeFilm) => (
          <FilmCardComponent
            key={ film.id } id={ film.id } name={ film.name } previewImage={ film.previewImage } srcVideo={ film.previewVideoLink }
          />)
        ) }
      </div>

      <ShowMoreComponent flagCountCard={ countCard !== filteredFilm.length }/>
    </section>
  );
}

export default MovieListComponent;
