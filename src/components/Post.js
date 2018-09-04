import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <tr disabled key={this.props.post.id}>
        <td>{this.props.post.title}</td>

        <td>{this.props.post.message}</td>
        <td>
          <button
            className="edit"
            id="edit_id"
            onClick={() =>
              this.props.dispatch({
                type: "EDIT_POST",
                id: this.props.post.id
              })
            }
            disabled={this.props.pd}
          >
            <span className="glyphicon glyphicon-edit" />
            Edit
          </button>
          <button
            className="delete"
            id="delete_id"
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_POST",
                id: this.props.post.id
              })
            }
          >
            <span className="glyphicon glyphicon-remove" />
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default connect()(Post);
