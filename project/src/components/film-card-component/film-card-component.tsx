import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { resetMainScreen } from '../../store/list-data';
import VideoPlayerComponent from '../video-player-component/video-player-component';
import { AppRoute } from '../../const';

type FilmCardTypeProps = {
  id: number;
  name: string;
  previewImage: string;
  srcVideo: string;
}

function FilmCardComponent({ id, name, previewImage, srcVideo }: FilmCardTypeProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={ () => setActiveCard(true) } onMouseLeave={ () => setActiveCard(false) }
    >
      <Link to={ `${ AppRoute.Film }/${ id }` } onClick={ () => { dispatch(resetMainScreen()); } }>
        <div className="small-film-card__image">
          { activeCard ? <VideoPlayerComponent src={ srcVideo } srcImage={ previewImage }/> :
            <img src={ previewImage } alt={ name } width="280" height="175"/> }
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={ `${ AppRoute.Film }/${ id }` } onClick={ () => { dispatch(resetMainScreen()); } }>
          { name }
        </Link>
      </h3>
    </article>
  );
}

export default FilmCardComponent;
