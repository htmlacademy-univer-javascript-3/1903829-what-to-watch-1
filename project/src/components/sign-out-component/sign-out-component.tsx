import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../../const';
import { getAuthorizationStatus, getAvatarUrl } from '../../store/user-processes/selectors';

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const avatar = useAppSelector(getAvatarUrl);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={`${ AppRoute.SignIn }`}
          >
            Sign in
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={avatar || ''} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={ AppRoute.Root } className="user-block__link" onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
        >Sign out
        </Link>
      </li>
    </ul>
  );
}

export default SignOut;
