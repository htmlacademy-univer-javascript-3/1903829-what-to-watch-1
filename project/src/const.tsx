const TIMEOUT_SHOW_ERROR = 2000;
const CARDS_PER_STEP = 8;

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export { AppRoute, AuthorizationStatus, APIRoute, TIMEOUT_SHOW_ERROR, CARDS_PER_STEP };
