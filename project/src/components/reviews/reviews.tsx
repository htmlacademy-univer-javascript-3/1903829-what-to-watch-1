import Reviews from '../../types/reviews';
import Review from '../review/review';

type reviewsProps = {
  reviews: Reviews;
}

function ReviewsComponent({ reviews }: reviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { reviews.map(({ id, rating, user, date, comment }) => (<Review key={ id } rating={ rating } name={ user.name } date={ date } comment={ comment }/> ))}
      </div>
    </div>
  );
}

export default ReviewsComponent;
