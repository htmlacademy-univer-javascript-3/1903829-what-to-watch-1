const TIMEOUT_SHOW_ERROR = 2000;
const CARDS_PER_STEP = 8;
const AUTH_TOKEN_KEY_NAME = 'wtw-token';

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/review',
  Player = '/player/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum ApiRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Reviews = '/comments',
  Promo = '/promo',
  Similar = '/similar',
}

enum NameSpace {
    User = 'USER',
    WelcomeScreen = 'MAIN',
    FilmScreen = 'FILM',
    App = 'APP',
}

export { AppRoute, AuthorizationStatus, ApiRoute, NameSpace, TIMEOUT_SHOW_ERROR, CARDS_PER_STEP, AUTH_TOKEN_KEY_NAME };
