import React from "react";
import Lyrics from "./Lyrics";

const KaraokeDisplay = props => {
  const mapSongLyrics = () =>
    props.songs.map(song => {
      return (
        <div key={song.id}>
          <h2>{song.title}</h2>
          <Lyrics lyrics={song.lyrics} />
        </div>
      );
    });
  return <div className="karaoke-display">{mapSongLyrics()}</div>;
};

export default KaraokeDisplay;
