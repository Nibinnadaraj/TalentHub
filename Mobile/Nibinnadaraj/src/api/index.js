import ApiConstants from './ApiConstants';
import Axios from 'axios'
export default async function ApiStatus(path, params, method, token, auth) {
  const options = {
    Authorization: `Bearer ${auth}` 
  } 
 
  const response= Axios({
    method: method,
    url: ApiConstants.BASE_URL + path,
    data: params,
    headers: options
  }).catch(error => {
    console.log(
      '%c  error api call ' + path + ' :\n',
      'background: #c7200e; color: #FFF',
      error,
    );
    return false;
   });


  return Promise.all([response]);
}