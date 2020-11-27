import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutFile } from './screens/LayoutFile';
import { TodoApp } from './screens/TodoApp';



class App extends Component {
  render () {
  return (
    <div className="App">
      <LayoutFile />
      <TodoApp />
    </div>
  );
  }
}

export default App;
