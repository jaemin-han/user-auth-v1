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

// Reducers are the most important building block and it's important to understand the concept
// * Reducers are pure js functions that take the current application state and an action object and return a new application state
// The important thing to notice here is that the state is not changed directly

// Instead a new state object (based on the old state) is created and the update is done to the new state.