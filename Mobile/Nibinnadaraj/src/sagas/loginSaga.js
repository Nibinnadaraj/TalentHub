/*toast stylers */
import Toast from 'react-native-simple-toast';
/* Tost ENd */
import * as RootNavigation from '../../components/navigation/RootNavigation';
import { put, call, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import loginUser from '../api/methods/loginUser';
import refreshToken from '../api/methods/refreshToken';
import * as loadingActions from "../actions/loadingActions";
import * as loginActions from "../actions/loginActions";

export  function* loginAsync(action) {

  yield put(loadingActions.enableLoader());

  const response = yield call(loginUser, action.params);
  if (response[0].status == 200) {
    yield put(loginActions.loginResponse(response[0].data));
    yield put(loadingActions.disableLoader());
  } else {
    yield put(loadingActions.disableLoader());
    Toast.show("Login Failed...!", Toast.SHORT, [
      'UIAlertController',
    ]);
  }
}

export  function* refreshTokenAsync(action) {

  yield put(loadingActions.enableLoader());
  console.log("param",action.params)
  const response = yield call(refreshToken, action.params);

  console.log(response)
  if (response[0].status == 200) {
    yield put(loginActions.loginResponse(response[0].data));
    yield put(loadingActions.disableLoader());
  } else {
    yield put(loadingActions.disableLoader());
    Toast.show("Refresh Token Fail.!", Toast.SHORT, [
      'UIAlertController',
    ]);
  }
}


