import { ChooseRatingLevel } from '../../utils/functions';

type MoviePageProps = {
  rating: number | undefined;
  description: string | undefined;
  scoresCount: number | undefined;
  director: string | undefined;
  starring: string[] | undefined;
}

function MoviePageComponent({ rating, description, scoresCount, director, starring }: MoviePageProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ rating }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ ChooseRatingLevel(rating) }</span>
          <span className="film-rating__count">{ scoresCount } ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ description }</p>
        <p className="film-card__director"><strong>Director: { director }</strong></p>

        <p className="film-card__starring"><strong>Starring: { starring?.join(', ') } and other</strong></p>
      </div>
    </>
  );
}

export default MoviePageComponent;
