import React, { Component } from "react";
import Post from "./Post";


class PostList extends Component {
  render() {
    return (
        <div>
          <h1>Top Heading</h1>
          {this.props.posts.map(post => (
            <Post title={post.title} body={post.body}/>
          ))} 
        </div>
    );
  }
}

export default PostList;
