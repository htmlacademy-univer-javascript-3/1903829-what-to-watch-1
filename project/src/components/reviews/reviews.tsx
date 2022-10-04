import Reviews from '../../types/reviews';
import Review from '../review/review';

type reviewsProps = {
  mocks: Reviews;
}

function ReviewsComponent({ mocks}: reviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { mocks.map((mock) => (<Review key={ mock.id } rating={ mock.rating } name={ mock.user.name } date={ mock.date } comment={ mock.comment }/> ))}
      </div>
    </div>
  );
}

export default ReviewsComponent;
