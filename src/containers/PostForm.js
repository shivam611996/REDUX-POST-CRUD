import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: "", newMessage: "" };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.titleInput = null;
    this.setTitleInputRef = element => {
      this.titleInput = element;
    };

    this.focusTitleInput = () => {
      if (this.titleInput) this.titleInput.focus();
    };

    this.focusMessageInput = () => {
      if (this.getMessage) this.getMessage.focus();
    };
  }

  componentDidMount() {
    this.focusTitleInput();
  }

  componentDidUpdate() {
    this.focusTitleInput();
  }

  changeTitle(ev) {
    this.setState({ newTitle: ev.target.value });
  }

  changeMessage(ev) {
    this.setState({ newMessage: ev.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      const title = this.titleInput.value;
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
      this.titleInput.value = "";
      this.getMessage.value = "";
      this.focusTitleInput();
    } else {
      if (this.titleInput.value.length === 0) {
        alert("Post Title is Required");
        this.focusTitleInput();
      } else {
        alert("Post Message is Required");
        this.focusMessageInput();
      }
    }
  };

  handleEdit = postId => {
    if (this.handleValidation()) {
      const newTitle = this.titleInput.value;
      const newMessage = this.getMessage.value;
      const data = {
        newTitle,
        newMessage
      };
      this.props.dispatch({ type: "UPDATE_POST", id: postId, data: data });
      this.titleInput.value = "";
      this.getMessage.value = "";
    } else {
      if (this.titleInput.value.length === 0) alert("Post Title is Required");
      else alert("Post Message is Required");
    }
    this.focusTitleInput();
  };

  handleValidation() {
    if (
      this.titleInput.value.trim().length === 0 ||
      this.getMessage.value.trim().length === 0
    )
      return false;
    return true;
  }

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
            ref={this.setTitleInputRef}
            placeholder="Enter Post Title"
            id="post_title"
            // onClick={this.handleValidation.bind(this)}
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
            id="post_message"
            //  onClick={this.handleValidation}
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
