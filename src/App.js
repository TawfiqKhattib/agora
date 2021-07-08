import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';

import Market from './components/Market';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Market />
      </div>
    );
  }
}


export default observer(App);
