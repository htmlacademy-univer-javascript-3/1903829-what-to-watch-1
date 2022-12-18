import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import TypeFilm from '../../types/film-type';
import StatusFilm from '../../types/status';
import { changeFilmStatusToView, changePromoStatusToView } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type FilmCardButtonsProps = {
  film: TypeFilm | null,
  favoriteType: string,
  favoriteCount: number,
  authStatus: string,
}

function FilmCardButtons({ film, favoriteType, favoriteCount, authStatus }: FilmCardButtonsProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onAddFavoriteClick = () => {
    const filmStatus: StatusFilm = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    if (favoriteType === 'FILM') {
      dispatch(changeFilmStatusToView(filmStatus));
    } else {
      dispatch(changePromoStatusToView(filmStatus));
    }
  };

  const onClickPlay = () => {
    navigate(`/player/${ film?.id }`);
  };

  return (
    <>
      <button
        className="btn btn--play film-card__button" type="button"
        onClick={ onClickPlay }
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      {
        authStatus === AuthorizationStatus.Auth &&
        <button
          className="btn btn--list film-card__button" type="button"
          onClick={ onAddFavoriteClick }
        >
          {
            film?.isFavorite ?
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#in-list"></use>
              </svg> :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
          }
          <span>My list</span>
          <span className="film-card__count">{ favoriteCount }</span>
        </button>
      }
    </>
  );
}

export default FilmCardButtons;
