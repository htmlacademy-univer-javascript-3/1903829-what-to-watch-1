import { ChangeEvent, useState } from 'react';
import { createAPI } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../const';

type reviewFormProps = {
  rating: number | undefined;
  id: number | undefined;
};

const ReviewForm = ({ id, rating }: reviewFormProps) => {
  const [review, setReview] = useState<string>('');
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const api = createAPI();
  const navigate = useNavigate();

  const isReviewCorrect = (): boolean => !(review.length < 50 || review.length > 400 || rating === null);

  const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePostComment = async (e: any) => {
    e.preventDefault();
    try {
      setIsFormDisabled(true);
      await api.post(`${ APIRoute.Reviews }/${ id }`, {
        comment: review,
        rating,
      });
      // eslint-disable-next-line no-alert
      alert('Комментарий был успешно добавлен');
      navigate(`${ APIRoute.Films }/${ id }`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-alert
      alert(`При добавлении комментария произошла ошибка, ${ error.message }`);
    }
    setIsFormDisabled(false);
  };

  return (
    <div className="add-review__text">
      <textarea className="add-review__textarea" name="review-text" id="review-text"
        placeholder="Review text" onChange={ handleTextarea } disabled={ isFormDisabled }
      />

      <div className="add-review__submit">
        <button className="add-review__btn" type="submit" onClick={ handlePostComment }
          disabled={ !isReviewCorrect() || isFormDisabled }
        >Post
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
