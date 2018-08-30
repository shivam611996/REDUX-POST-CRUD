import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import EditComponent from "../components/EditComponent";

class AllPost extends Component {
  render() {
    return (
      <div className="all_posts">
        <table className="table table-striped table-hover table-responsive-xl">
          <caption>
            <strong>All Posts</strong>
          </caption>
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(
              post =>
                post.editing ? (
                  <EditComponent post={post} key={post.id} />
                ) : (
                  <Post post={post} key={post.id} />
                )
            )}
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
