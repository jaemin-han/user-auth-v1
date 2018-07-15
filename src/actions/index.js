import constants from '../constants';

export default {
	register: (params) => {
		return dispatch => {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
		}
	}
}
