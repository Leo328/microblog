import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import TitleList from "./components/TitleList";
import PostList from "./components/PostList";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        title: "lol Title",
        body: "this is some text"
      },
      {
        title: "Joel Title",
        body: "this is some text  lol"
      },
      {
        title: "BMW Z4 M Coupe",
        body: "BMW S54B32 motor won Engine of the Year 8 years in a row"
      }
    ];
  }
  render() {
    const titles = this.state.map(post => post.title);
    console.log("titles=", titles);
    return (
      <div className="App">
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <TitleList
                titles={titles}
                // title1={this.state[0].title}
                // title2={this.state[1].title}
                // title3={this.state[2].title}
              />
            </div>

            <div className="col-sm-6">
              <PostList posts={this.state} />
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
