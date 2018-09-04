import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import EditComponent from "../components/EditComponent";

class AllPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDisabled: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState = () => {
    this.setState({ postDisabled: !this.state.postDisabled });
  };

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
            {this.props.posts.map(post => {
              return post.editing ? (
                <EditComponent
                  post={post}
                  key={post.id}
                  pd={!this.state.postDisabled}
                />
              ) : (
                <Post
                  post={post}
                  key={post.id}
                  //post_editing={this.state.post_editing}
                  pd={this.state.postDisabled}
                />
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
