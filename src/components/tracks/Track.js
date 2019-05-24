import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  return (
    <div className=" col s12 m12 xl6 ">
      <div className="card z-depth-1">
        <div className="card-content">
          <h5>{props.track.track_name}</h5>

          <p>
            <strong>
              <i className="fas fa-microphone" /> Artist
            </strong>
            : {props.track.artist_name}
          </p>
          <p>
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {props.track.album_name}
          </p>

          <Link
            to={`lyrics/track/${props.track.track_id}`}
            className="btn-flat btn-small deep-orange darken-1 white-text"
          >
            <i className="fas fa-chevron-right "> </i>View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
