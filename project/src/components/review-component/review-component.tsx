import { convertTimeReview } from '../../utils/functions';

type ReviewProps = {
  rating: number;
  name: string;
  date: string;
  comment: string;
}

function ReviewComponent({ rating, name, date, comment }: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{ comment }</p>

        <footer className="review__details">
          <cite className="review__author">{ name }</cite>
          <time className="review__date">
            { convertTimeReview(date) }
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{ rating }</div>
    </div>
  );
}

export default ReviewComponent;
