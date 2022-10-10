import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import VideoPlayerComponent from '../../components/video-player-component/video-player-component';

type FilmCardType = {
  id: number;
  name: string;
  previewImage: string;
  onMouseOver: (evt: MouseEvent<HTMLDivElement>) => void;
  activeCard: boolean;
  srcVideo: string;
}

function FilmCard({ id, name, previewImage, onMouseOver, activeCard, srcVideo }: FilmCardType): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={ onMouseOver }>
      <div className="small-film-card__image">
        { activeCard ? <VideoPlayerComponent src={ srcVideo } /> : <img src={ previewImage } alt={ name } width="280" height="175"/> }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${ id }`}>{ name }</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
