import TypeFilm from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type MoreFilmProps = {
  filmList: TypeFilm[];
}

function MoreFilmComponent({ filmList }: MoreFilmProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        { filmList.map((film) => (<FilmCard key={ film.id } id={ film.id } name={ film.name } previewImage={ film.previewImage } srcVideo={ film.videoLink } />)) }
      </div>
    </section>
  );
}

export default MoreFilmComponent;
