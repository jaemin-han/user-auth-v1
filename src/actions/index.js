import constants from '../constants';

export default {

	currentUserReceived: (user) => {
		return {
			type: 'CURRENT_USER_RECEIVED',
			data: user
		}
	}
}

// * Actions are used to send information from the application to the store. *

// Sending information to the 'store' is needed to change the application state after a user interaction, 
// internal events or API calls.

// Action object has two properties:
// - Type: a constant to identify the type of action
// - Payload: the object which is assigned to the property contains the data which are sent to the store

// Action objects are created by using functions. These functions are called action creators
// and calling actions in the application is easy by using the dispatch method


// Action 'TYPE' is registered in 'REDUCER', which is processed into the 'STORE'