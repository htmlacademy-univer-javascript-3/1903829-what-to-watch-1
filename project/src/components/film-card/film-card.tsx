import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

type FilmCardType = {
  id: number;
  name: string;
  previewImage: string;
  mouseOverHandler: (evt: MouseEvent<HTMLDivElement>) => void;
}

function FilmCard({ id, name, previewImage, mouseOverHandler }: FilmCardType): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={ mouseOverHandler }>
      <div className="small-film-card__image">
        <img src={ previewImage } alt={ name } width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${ id }`}>{ name }</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
