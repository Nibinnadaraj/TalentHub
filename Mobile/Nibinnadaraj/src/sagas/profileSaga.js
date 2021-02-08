import { put, call } from "redux-saga/effects";
import getProfileData from '../api/methods/getProfileData';
import * as loadingActions from "../actions/loadingActions";
import * as profileActions from "../actions/profileActions";
import * as loginActions from "../actions/loginActions";

export  function* profileAsync(action) {

  yield put(loadingActions.enableLoader());
  //console.log(action.token)
  const response = yield call(getProfileData, action.token);
  console.log(response)
  if (response[0].status == 200) {
    yield put(profileActions.profileDataResponse(response[0].data));
    yield put(loadingActions.disableLoader());
  } else {
    let params = {
          grant_type: "refresh_token",
          client_id:"nliCaBuoAAurkdwnWeD9oQGQrfa81tj4",
          client_secret:"kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu",
          refresh_token: action.refresh_token
        }
    yield put(loginActions.refreshToken(params))
    yield put(loadingActions.disableLoader());
  }
}



