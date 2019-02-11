import React from 'react';
import Song from './Song';
const SongList = (props) => {
  const mapSongs = () => props.songs.map(song => {
    return <Song key={song.id} handleClick={props.handleClick} isClicked={props.isClicked} song={song} />
  })
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {mapSongs()}

      </tbody>
    </table>
  )
}

export default SongList;
