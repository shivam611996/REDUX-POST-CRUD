<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      // <div className="post">
      <tr key={this.props.post.id}>
        <td>{this.props.post.title}</td>

        <td>{this.props.post.message}</td>
        <td>
          <button
            onClick={() =>
              this.props.dispatch({
                type: "EDIT_POST",
                id: this.props.post.id
              })
            }
          >
            <span className="glyphicon glyphicon-edit" />
            Edit
          </button>
          <button
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_POST",
                id: this.props.post.id
              })
            }
          >
            <span className="glyphicon glyphicon-trash" />
            Delete
          </button>
        </td>
      </tr>
      // </div>
    );
  }
}
export default connect()(Post);
=======
import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      // <div className="post">
      <tr key={this.props.post.id}>
        <td>{this.props.post.title}</td>

        <td>{this.props.post.message}</td>
        <td>
          <div className="control-buttons">
            <button
              className="edit"
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_POST",
                  id: this.props.post.id
                })
              }
            >
              Edit
            </button>

            <button
              className="delete"
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_POST",
                  id: this.props.post.id
                })
              }
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      // </div>
    );
  }
}
export default connect()(Post);
>>>>>>> 48403b2849735cfaf44d581a58bb0101d18aa3cf
