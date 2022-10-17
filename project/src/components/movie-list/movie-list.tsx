import { useState } from 'react';
import TypeFilm from '../../types/film-type';
import FilmCard from '../film-card/film-card';
import Genre from '../genre/genre';
import ShowMoreComponent from '../show-more-component/show-more-component';
import { useAppSelector } from '../../hooks';
import { SortGenreFilm } from '../../utils/functions';

type MovieListProps = {
  films: TypeFilm[],
}

function MovieList({ films }: MovieListProps): JSX.Element {
  const [userCard, setUserCard] = useState(NaN);
  const changeGenre = useAppSelector((state) => state.genre);
  const countCard = useAppSelector((state) => state.countShowCard);
  const filteredFilm = SortGenreFilm(films, changeGenre);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Genre />

      <div className="catalog__films-list">
        { filteredFilm.slice(0, countCard).map((film: TypeFilm) => (
          <FilmCard
            key={ film.id } id={ film.id } name={film.name } previewImage={ film.previewImage } activeCard={ film.id === userCard }
            srcVideo={ film.previewVideoLink } onMouseOver={ (filmId: number) => {
              setUserCard(filmId);
            } }
          />)
        ) }
      </div>

      <ShowMoreComponent flagCountCard={ countCard !== filteredFilm.length }/>
    </section>
  );
}

export default MovieList;
