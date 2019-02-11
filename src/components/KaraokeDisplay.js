import React from "react";
import Lyrics from "./Lyrics";

const KaraokeDisplay = props => {
      return (
        <div  key={props.songObj.id} className="karaoke-display">
          <h2>{props.songObj.title}</h2>
          <Lyrics lyrics={props.songObj.lyrics} />
        </div>
      )  
};

export default KaraokeDisplay;
