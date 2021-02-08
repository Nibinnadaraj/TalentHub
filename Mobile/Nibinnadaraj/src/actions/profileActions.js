/*
 * Reducer actions related with login
 */
import * as types from "./types";

export function profileDataRequest(token,refresh_token) {
  return {
    type: types.PROFILE_DATA_REQUEST,
    token,
    refresh_token
  };
}

export function profileDataResponse(response) {
  return {
    type: types.PROFILE_DATA_RESPONSE,
    response,
  };
}


