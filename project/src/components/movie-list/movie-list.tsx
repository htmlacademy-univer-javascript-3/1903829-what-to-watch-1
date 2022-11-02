import TypeFilm from '../../types/film-type';
import FilmCard from '../film-card/film-card';
import Genre from '../genre/genre';
import ShowMoreComponent from '../show-more-component/show-more-component';
import { useAppSelector } from '../../hooks';

function MovieList(): JSX.Element {
  const countCard = useAppSelector((state) => state.countShowCard);
  const filteredFilm = useAppSelector((state) => state.filmsListFiltered);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Genre />

      <div className="catalog__films-list">
        { filteredFilm.slice(0, countCard).map((film: TypeFilm) => (
          <FilmCard
            key={ film.id } id={ film.id } name={ film.name } previewImage={ film.previewImage } srcVideo={ film.previewVideoLink }
          />)
        ) }
      </div>

      <ShowMoreComponent flagCountCard={ countCard !== filteredFilm.length }/>
    </section>
  );
}

export default MovieList;
