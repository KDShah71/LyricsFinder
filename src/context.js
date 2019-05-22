import React, { Component } from "react";

const Context = React.createContext();

export class MyProvider extends Component {
  state = {
    track_list: "abc"
  };

  render() {
    return (
      <Context.Provider value={this.state.track_list}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
