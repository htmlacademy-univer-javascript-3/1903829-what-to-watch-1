import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { resetMainScreen } from '../../store/list-data';

type FilmCardFavouriteTypeProps = {
  id: number;
  title: string;
  previewImage: string;
}

function FilmCardFavourite({ id, title: name, previewImage }: FilmCardFavouriteTypeProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={ previewImage } alt={ name } width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={ `${ AppRoute.Film }/${ id }` }
          onClick={() => { dispatch(resetMainScreen()); } }
        >{ name }
        </Link>
      </h3>
    </article>
  );
}

export default FilmCardFavourite;
