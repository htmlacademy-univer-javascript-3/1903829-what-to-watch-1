import { Genres } from '../../const';

function Genre(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      { Genres.map((genre) => (
        <li className="catalog__genres-item" key={genre}>
          <a href="#todo" className="catalog__genres-link">{genre}</a>
        </li>))}
    </ul>
  );
}

export default Genre;
