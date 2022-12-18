import store from '../store';
import { setError } from '../store/app-process';
import { TIMEOUT_SHOW_ERROR } from '../const';

const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));

  setTimeout(
    () => store.dispatch(setError(null)),
    TIMEOUT_SHOW_ERROR,
  );
};

export default processErrorHandle;
