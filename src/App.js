import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import TitleList from "./TitleList";
import PostList from "./PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <TitleList />
        <PostList />
      </div>
    );
  }
}

export default App;
