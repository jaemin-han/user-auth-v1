import constants from '../constants'

var initialState = {
	all: null,
	currentUser: null // signed in user
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case 'CURRENT_USER_RECEIVED':
			// data represents currently logged in user.
			console.log('CURRENT_USER_RECEIVED: ' + JSON.stringify(action.data))
			newState['currentUser'] = action.data
			return newState

		default:
			return state
	}
}