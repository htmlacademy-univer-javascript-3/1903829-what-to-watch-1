const TIMEOUT_SHOW_ERROR = 2000;
const CARDS_PER_STEP = 8;

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/review',
  Player = '/player/:id',
  Root = '/',
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
  Favorite = '/favorite',
  Reviews = '/comments',
}

enum NameSpace {
    User = 'USER',
    WelcomeScreen = 'MAIN',
    FilmScreen = 'FILM',
    App = 'APP',
}

export { AppRoute, AuthorizationStatus, APIRoute, NameSpace, TIMEOUT_SHOW_ERROR, CARDS_PER_STEP };
