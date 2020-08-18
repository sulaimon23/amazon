
import React, { Component } from 'react';
import ReactDom from 'react-dom'
import 'react-bootstrap'
import Header from './header/Header'
import { Provider } from 'react-redux'
import store from '../store'
import Screen from './screen/screen'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Provider store={store}>
        <Header />
        <Screen />
      </Provider>
     );
  }
}
 
ReactDom.render(<App />,document.getElementById('app'));