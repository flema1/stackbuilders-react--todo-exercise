import React from 'react';
import Home from './containers/Home';

export default class App extends React.Component {
  render() {
    return (
     <div className="App" >
       <div className="app-container">
          <Home/>
       </div>
      </div>);
  }
}