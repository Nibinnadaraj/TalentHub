import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function loginUser(params) {
    let client_id = params.client_id;
    let grant_type = params.grant_type;
    let audience = params.audience;
    let email = params.email;
    let password = params.password;
    let scope = params.scope;
    let client_secret = params.client_secret;
    let loginParams ="&grant_type="+grant_type+"&client_id="+client_id+"&audience="+audience+"&username="+email+"&password="+password+"&scope="+scope+"&client_secret="+client_secret ;
    return Api(
        ApiConstants.LOGIN ,
        loginParams,
        'post',
        null,
        null
    );
}
