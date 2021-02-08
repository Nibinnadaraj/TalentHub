import Api from '..';
import ApiConstants from '../ApiConstants';

export default function refreshToken(params) {
    let client_id = params.client_id;
    let grant_type = params.grant_type;
    let refresh_token = params.refresh_token;
    let client_secret = params.client_secret;
    let loginParams ="&grant_type="+grant_type+"&client_id="+client_id+"&client_secret="+client_secret+"&refresh_token="+refresh_token ;
    return Api(
        ApiConstants.REFRESH_TOKEN ,
        loginParams,
        'post',
        null,
        null
    );
}
