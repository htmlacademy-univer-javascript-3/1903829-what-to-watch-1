import { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import AuthData from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';
import { LogoComponent, LogoLightComponent } from '../../components/logo-component/logo-component';
import { getAuthorizationStatus } from '../../store/selectors';
import { loginAction } from '../../store/api-actions';

function SignIn(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const checkEmail = (email: string): boolean => {
    const result = /\S+@\S+\.\S+/.test(email);
    setIsCheckEmail(!result);
    return result;
  };

  const checkPassword = (password: string): boolean => {
    const result = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/.test(password);
    setIsCheckPassword(!result);
    return result;
  };

  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [isCheckPassword, setIsCheckPassword] = useState(false);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={ AppRoute.Main } />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {
            isCheckEmail &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          }
          {
            isCheckPassword &&
            <div className="sign-in__message">
              <p>Please enter a valid password</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className={`sign-in__field ${ isCheckEmail && 'sign-in__field--error' }`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={ emailRef }
                onChange={() => setIsCheckEmail(false) }
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={ `sign-in__field ${ isCheckPassword && 'sign-in__field--error' }` }>
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={ passwordRef }
                onChange={() => setIsCheckPassword(false)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                if (emailRef.current !== null && passwordRef.current !== null
                    && checkEmail(emailRef.current?.value)
                    && checkPassword(passwordRef.current?.value)) {
                  onSubmit({ email: emailRef.current.value, password: passwordRef.current.value, });
                }
              } }
            >Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <LogoLightComponent />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
