import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import TitleList from "./components/TitleList";
import PostList from "./components/PostList";
import Form from "./components/Form";


// makeIdFactory: this is a CLOSURE that returns the inner function;
//  each time you call the inner function, it returns the next seq id
function makeIdFactory() {
  let id = 0;
  function inner() {
    return ++id;
  }
  return inner;
}

// each time you call this, you get a new ID  (getNewId is a function -- "inner", above)
const getNewId = makeIdFactory()


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "posts":[]
    }
    //   {
    //     title: "lol Title",
    //     body: "this is some text"
    //   },
    //   {
    //     title: "Joel Title",
    //     body: "this is some text  lol"
    //   },
    //   {
    //     title: "BMW Z4 M Coupe",
    //     body: "BMW S54B32 motor won Engine of the Year 8 years in a row"
    //   }
    // ]};
  }


  // function add(x, y) { return x + y} 

  // add = (x, y) => { console.log("got there"); return x + y }
  // add = (x, y) => x + y    // "auto-return" only when not a block  (no {...} ) 

  // addNewPost("title", "body")

  addNewPost = (title, body) => {
    this.setState(state => ({"posts": [...state.posts, {id: getNewId(), title, body}]}))
      // [...state, {"title": title, "body": body}]   next line means this  
  }

  render() {
    console.log("State=", this.state);
    const titles = this.state.posts.map(post => post.title);

    return (
      <div className="App">
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <TitleList
                titles={titles}
              />
            </div>

            <div className="col-sm-6">
              <PostList posts={this.state.posts} />
              <Form callMeToAddNewPost={this.addNewPost} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
