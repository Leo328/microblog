import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    // const
    // props.posts = [{title: ... ,body: ...}, {title: ..., body: ...}]
    return (
      <div>
        <div>
          <h1>Top Heading</h1>
          {this.props.posts.map(post => (
            <Post title={post.title} body={post.body} />
          ))}
        </div>

        {/* <div className="blog1">
          <h2>
            <a name="title-1">Title1</a>
          </h2>
          <p>this is some text</p>
        </div>

         */}
      </div>
    );
  }
}

export default PostList;
