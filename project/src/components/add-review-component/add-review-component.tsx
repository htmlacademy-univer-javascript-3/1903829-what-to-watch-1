import { ChangeEvent, useState, Fragment, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilm } from '../../store/selectors';
import { postComment } from '../../store/api-actions';
import UserComment from '../../types/user-comment';

function AddReviewComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);

  const [formData, setFormData] = useState({
    rating: NaN,
    reviewText: '',
  });
  const [disabledText, setDisabledText] = useState(true);
  const [disabledRate, setDisabledRate] = useState(true);

  const onClickSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({ comment: formData.reviewText, rating: formData.rating, filmId: film?.id.toString() || '' });
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData));
  };

  const textareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, reviewText: evt.target.value });
    if (evt.target.value.length >= 50 && evt.target.value.length <= 400) { setDisabledText(false); }
    else { setDisabledText(true); }
  };

  const ratingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: parseInt(evt.target.value, 10) });
    if (evt.target.value) { setDisabledRate(false); }
    else { setDisabledRate(true); }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={ onClickSubmit }>
        <div className="rating">
          <div className="rating__stars">
            {
              [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => (
                <Fragment key={ number }>
                  <input key={ number } className="rating__input" id={ `star-${ number }` }
                    type="radio" value={ number } onChange={ ratingChange } checked={ formData.rating === number }
                  />
                  <label className="rating__label" htmlFor={ `star-${ number }` }>Rating { number }</label>
                </Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" placeholder="Review text" onChange={ textareaChange }
            value={ formData.reviewText } maxLength={ 400 }
          >

          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={ disabledRate || disabledText }>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewComponent;
