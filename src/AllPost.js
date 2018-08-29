import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
//import { handleEdit } from "./PostForm";
import EditComponent from "./EditComponent";

class AllPost extends Component {
  // handleEdit = post => {
  //   //e.preventDefault();
  //   document.getElementById("post_title").value = post.title;
  //   document.getElementById("post_message").value = post.message;
  //   const newTitle = "my title";
  //   const newMessage = "my post";
  //   const data = {
  //     newTitle,
  //     newMessage
  //   };
  //   this.props.dispatch({ type: "UPDATE", id: post.id, data: data });
  //   document.getElementById("post_title").value = "";
  //   document.getElementById("post_message").value = "";
  //   // document.getElementById("post_button").value = "Post";
  // };
  render() {
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>
        <table className="table table-striped">
          <thead>
            <th>Title</th>
            <th>Message</th>
            <th />
          </thead>
          <tbody>
            {this.props.posts.map(post => {
              post.editing ? (
                <EditComponent post={post} key={post.id} />
              ) : (
                // <EditComponent post={post} key={post.id} />
                //<tr key={post.id}>
                <Post post={post} key={post.id} />
                // </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPost);
