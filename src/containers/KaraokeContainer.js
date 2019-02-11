import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs:[],
      isClicked: false,
      value: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/30/songs')
    .then(res=> res.json())
    .then(songs=> this.setState({
      songs
    }));
  }

  handleClick = (e) => {
    console.log('Clicked play button:', e.target)
  }

  handleChange= (e) => {
    this.setState({ value: e.target.value})
  }

  filterSongs = (arr) => {
    return arr.filter(song => song.title === this.state.value)
  }
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange} value={this.state.value}/>
          <SongList isClicked={this.state.isClicked} songs={this.state.songs.filter(song=> song.title.includes(this.state.value))}/>
        </div>

        <KaraokeDisplay isClicked={this.state.isClicked} songs={this.state.songs}/>
      </div>
    );
  }
}

export default KaraokeContainer;
