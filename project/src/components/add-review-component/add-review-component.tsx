import { ChangeEvent, useState } from 'react';
import StarComponent from '../star-component/star-component';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/list-data/selectors';
import ReviewForm from '../review-form/review-form';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { postComment } from '../../store/api-actions';

type UserComment = {
  filmId: string,
  rating: number,
  comment: string
}

function AddReviewComponent(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: 8,
    reviewText: '',
  });

  const film = useAppSelector(getFilm);
  const rating = film?.rating;

  const changeRatingArea = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: parseInt(evt.target.value, 10)});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({comment: formData.reviewText, rating: formData.rating, filmId: film?.id.toString() || '' });
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={ handleSubmit }>
        <div className="rating">
          <div className="rating__stars">
            {
              [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((i) => (
                <StarComponent key={ String(i) } n={ i } changeRatingArea={ changeRatingArea } />
              ) )
            }
          </div>
        </div>

        <ReviewForm id={ film?.id} rating={ rating }/>
      </form>
    </div>
  );
}

export default AddReviewComponent;
