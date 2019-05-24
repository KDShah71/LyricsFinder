import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        //  console.log(res.data);
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({ trackTitle: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card  z-depth-1">
              <div className="card-content center">
                <h1>
                  <i className="fas fa-music" />
                  Search for A Song
                </h1>

                <h5 className="text-center">
                  Get the Lyrics for any song
                </h5>
                <form onSubmit={this.findTrack.bind(this, dispatch)}>
                  <div className="input-field ">
                    <input
                      id="last_name"
                      type="text"
                      className="validate "
                      name="trackTitle"
                      placeholder="Song Title..."
                      value={this.state.trackTitle}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn-flat btn-large orange darken-4 white-text">
                    <i className="fas fa-search" /> Find Lyrics
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
