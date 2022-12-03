import { useAppDispatch } from '../../hooks';
import { increaseCardCount } from '../../store/list-data';

type ShowMoreProps = {
  flagCountCard: boolean;
}

function ShowMoreComponent({ flagCountCard }: ShowMoreProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      {
        flagCountCard &&
        <button className="catalog__button" type="button" onClick={ (evt) => {
          evt.preventDefault();
          dispatch(increaseCardCount());
        }}
        >
          Show more
        </button>
      }
    </div>
  );
}

export default ShowMoreComponent;
