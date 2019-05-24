import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Lyrics extends Component {
  state = {
    lyrics: {},
    track: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          lyrics: res.data.message.body.lyrics
        });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          track: res.data.message.body.track
        });
      })

      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    // console.log(track);

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <div className="card">
          <div className="">
            <div className="card-title">
              <h4 className="center  brown-text darken-3">
                {track.album_name} by {track.artist_name}
              </h4>
              <p> </p>
            </div>

            <div className=" container">
              <h5 className="card-content grey-text darken-4">
                {lyrics.lyrics_body}
              </h5>
              <hr />
              <ul className="grey-text darken-4">
                <li className="">
                  <strong>Album ID</strong>: {track.album_id}
                </li>
                {/* <li className="">
                  <strong>Song Genre : </strong>
                  {
                    track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name
                  }
                </li> */}

                <li className="">
                  <strong>Explicit Word : </strong>
                  {track.explicit === 0 ? "No" : "Yes"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Lyrics;
