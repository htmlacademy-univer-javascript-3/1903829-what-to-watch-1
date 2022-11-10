import { State } from '../../types/state';
import { NameSpace } from '../../const';

const getError = (state: State): string | null => state[NameSpace.App].error;

export default getError;
