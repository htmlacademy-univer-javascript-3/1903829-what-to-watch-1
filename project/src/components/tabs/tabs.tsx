import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/list-data/selectors';

function Tabs():JSX.Element {
  const film = useAppSelector(getFilm);

  return (
    <div className="film-card__bg">
      <img src={ film?.backgroundImage } alt={ film?.name } />
    </div>
  );
}

export default Tabs;
