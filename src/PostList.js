import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div>
        <div className="col-6">
          <h1>Top Heading</h1>
          <br />
        </div>

        <div className="blog1">
          <h2>
            <a name="title-1">Title1</a>
          </h2>
          <p>this is some text</p>
        </div>

        <br />
        <div className="blog2">
          <h2>Title2</h2>
          <p>this is some text</p>
        </div>

        <br />
        <div className="blog3">
          <h2>Title3</h2>
          <p>this is some text</p>
        </div>
      </div>
    );
  }
}

export default PostList;
