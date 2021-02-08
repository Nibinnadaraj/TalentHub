import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: -1,
  acess_token:"",
  scope:"",
  expires_in:null,
  token_type:"",
  id_token:"",
  refresh_token:"",
  profileData:[]
};

export const loginReducer = createReducer(initialState, {

  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.params.username,
    };
  },

  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      access_token: action.response.access_token,
      scope: action.response.scope,
      expires_in: action.response.expires_in,
      token_type: action.response.token_type,
      id_token: action.response.id_token,
      refresh_token: action.response.refresh_token,
      isLoggedIn:true
    };
  },
  [types.LOGOUT_USER](state, action) {
    return {
      ...state,
      id: -1,
      access_token: "",
      scope: "",
      expires_in: "",
      token_type: "",
      id_token: "",
      refresh_token: "",
      isLoggedIn:false
    };
  },
  [types.PROFILE_DATA_RESPONSE](state, action) {
    return {
      ...state,
      profileData: action.response
    };
  },

});
