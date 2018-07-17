import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/Intro'
import { Auth } from './components/containers'

const app = (
	// Provider is a component that glues my project to React architecture.
	// Attaches project to Redux architecture
	<Provider store={store.configure(null)}>
		<Auth />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))