import { useState, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenreFilm } from '../../store/list-data/list-data';
import { getFilms } from '../../store/list-data/selectors';
import { getAllGenres } from '../../utils/functions';

function GenresComponent(): JSX.Element {
  const [changeGenre, setChangeGenre] = useState('All genres');
  const dispatch = useAppDispatch();
  const filmsList = useAppSelector(getFilms);
  const genres = getAllGenres(filmsList);

  const handleGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenreFilm({ genre: genre }));
    setChangeGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      { genres.map((genre) => (
        <li className={`catalog__genres-item ${changeGenre === genre && 'catalog__genres-item--active'}`} key={ genre }>
          <a href="/" className="catalog__genres-link" onClick={(evt) => handleGenreClick(evt, genre)}>{ genre }</a>
        </li>))}
    </ul>
  );
}

export default GenresComponent;
