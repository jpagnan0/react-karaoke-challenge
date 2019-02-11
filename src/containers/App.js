import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {
  handleClick = (e) => {
    console.log('Clicked play button:', e.target)
  }
  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
