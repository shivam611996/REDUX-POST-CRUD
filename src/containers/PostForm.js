import React, { Component } from "react";
import { connect } from "react-redux";

const required = value => {
  if (!value.toString().trim().length) {
    return "require";
  }
};
class PostForm extends Component {
  constructor() {
    super();
    this.state = { newTitle: "", newMessage: "" };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  changeTitle(ev) {
    this.setState({ newTitle: ev.target.value });
  }

  changeMessage(ev) {
    this.setState({ newMessage: ev.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    console.log("data id: ", data.id);
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  handleEdit = p => {
    document.getElementById("edit_id").disabled = true;
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: "UPDATE_POST", id: p, data: data });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  handleValidation = e => {
    if (e.target.value.trim().length === 0) return "required";
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="post_form">
          <input
            required
            type="text"
            minLength={5}
            maxLength={50}
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
            name="post_title"
            id="pt"
            onChange={this.handleValidation.bind(this)}
          />
          <br />
          <textarea
            required
            minLength={5}
            maxLength={50}
            className="form-control"
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
            name="post_message"
            id="pm"
            onChange={this.handleValidation}
          />
          <br />
          {this.props.post[0] === undefined ? (
            <input
              type="button"
              value="Post"
              id="post_button"
              onClick={this.handleSubmit}
            />
          ) : (
            <input
              type="button"
              value="Update"
              id="post_Update_button"
              onClick={() => this.handleEdit(this.props.post[0].id)}
            />
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("hi ", state.filter(post => post.editing === true));
  return {
    post: state.filter(post => post.editing === true)
  };
};
export default connect(mapStateToProps)(PostForm);
