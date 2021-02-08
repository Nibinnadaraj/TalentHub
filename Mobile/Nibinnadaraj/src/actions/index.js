// export action creators
import * as loginActions from './loginActions';
import * as loadingActions from './loadingActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    loadingActions
);
