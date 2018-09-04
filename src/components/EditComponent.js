import React, { Component } from "react";
//import { connect } from "react-redux";
import Post from "../components/Post";
class EditComponent extends Component {
  render() {
    document.getElementById("post_title").value = this.props.post.title;
    document.getElementById("post_message").value = this.props.post.message;
    return (
      <Post
        post={this.props.post}
        key={this.props.post.id}
        pd={this.props.pd}
      />
    );
  }
}
export default EditComponent;
