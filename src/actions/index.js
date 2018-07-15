import constants from '../constants';

export default {

	currentUserReceived: (user) => {
		return {
			type: 'CURRENT_USER_RECEIVED',
			data: user
		}
	}
}

// Action 'TYPE' is registered in 'REDUCER', which is processed into the 'STORE'