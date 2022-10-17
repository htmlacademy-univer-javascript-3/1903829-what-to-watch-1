import { useState } from 'react';
import { TypeFilm } from '../../types/film-type';
import FilmCard from '../film-card/film-card';
import Genre from '../genre/genre';
import { useAppSelector } from '../../hooks';
import { sortGenreFilm } from '../../utils/functions';

type MovieListProps = {
  films: TypeFilm[],
}

function MovieList({ films }: MovieListProps): JSX.Element {
  const [userCard, setUserCard] = useState(NaN);
  const changeGenre = useAppSelector((state) => state.genre);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Genre />

      <div className="catalog__films-list">
        { sortGenreFilm(films, changeGenre).map((film: TypeFilm) => (
          <FilmCard
            key={ film.id } id={ film.id } name={film.name } previewImage={ film.previewImage } activeCard={ film.id === userCard }
            srcVideo={ film.previewVideoLink } onMouseOver={ (filmId: number) => {
              setUserCard(filmId);
            } }
          />)
        ) }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default MovieList;
