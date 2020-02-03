import React, { Component } from 'react'
import AppContainer from './components/Navigation/Navigator'
import { Provider } from 'react-redux'
import store from './store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>

    )
  }
}
