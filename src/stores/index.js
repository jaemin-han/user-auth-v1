import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from '../reducers'

var store
export default {

	configure: (initialState) => { // initialState can be null
		
		const reducers = combineReducers({ // insert reducers here
			user: userReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}

	// - Store is the central objects that holds the state of the application. 
	// The store is created by using the createStore method from the Redux Library. 
	// I need to pass in the reducer function as a parameter. 
	// From there, I will be ready to dispatch a action to the store which is handled by the reducer.