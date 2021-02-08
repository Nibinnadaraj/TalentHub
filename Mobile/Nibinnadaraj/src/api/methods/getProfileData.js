import Api from '..';
import ApiConstants from '../ApiConstants';

export default function getProfileData(token) {
    return Api(
        ApiConstants.GET_PROFILE ,
        null,
        'GET',
        null,
        token
    );
}
