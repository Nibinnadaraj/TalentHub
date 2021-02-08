import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as loginSaga from './loginSaga';
import * as profileSaga  from './profileSaga';


export default function* watch() {
    yield all([takeLatest(types.LOGIN_REQUEST, loginSaga.loginAsync)]);
    yield all([takeLatest(types.REFRESH_TOKEN, loginSaga.refreshTokenAsync)]);
    yield all([takeLatest(types.PROFILE_DATA_REQUEST, profileSaga.profileAsync)]);

}
