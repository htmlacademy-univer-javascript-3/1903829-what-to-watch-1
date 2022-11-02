import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { resetMainScreen } from '../../store/action';
import VideoPlayerComponent from '../../components/video-player-component/video-player-component';

type FilmCardType = {
  id: number;
  name: string;
  previewImage: string;
  srcVideo: string;
}

function FilmCard({ id, name, previewImage, srcVideo }: FilmCardType): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCard, onMouseOver] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={ () => onMouseOver(true) }>
      <div className="small-film-card__image">
        { activeCard ? <VideoPlayerComponent src={ srcVideo } srcImage={ previewImage }/> :
          <img src={ previewImage } alt={ name } width="280" height="175"/> }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${ id }`} onClick={() => { dispatch(resetMainScreen()); }}>
          { name }
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
