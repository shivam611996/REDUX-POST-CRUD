import React, { Component } from "react";
import { connect } from "react-redux";
//import ReactDOM from "react-dom";
//import { handleEdit } from "./EditComponent";

class PostForm extends Component {
  constructor() {
    super();
    this.state = { newTitle: "", newMessage: "" };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    //this.handleDecision = this.handleDecision.bind(this);
    // this.dosomething = this.dosomething.bind(this);
    // document.getElementById("post_Update_button").disabled = true;
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
    //e.preventDefault();
    //this.getTitle.value = p.title;
    // this.getMessage.value = p.message;
    //ReactDOM.findDOMNode(this.refs.post_message).focus();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: "UPDATE", id: p, data: data });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  dosomething = element => {
    //element.preventDefault();
    console.log(element.target.value);
    if (element.target.value === "Post") return this.handleSubmit;
    return this.handleEdit;
  };

  // handleDecision = e => {
  //   e.preventDefault();
  //   if (this.dosomething === "Post") return this.handleSubmit;
  //   return this.handleEdit;
  // };
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form">
          <input
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
            name="post_title"
            id="pt"
            onChange={this.changeTitle}
            required
          />
          <br />
          <br />
          <textarea
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
            name="post_message"
            id="pm"
            onChange={this.changeMessage}
            required
          />
          <br />
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

// export const handleEdit = post => {
//   //e.preventDefault();
//   document.getElementById("pt").value = post.title;
//   document.getElementById("pm").value = post.message;

//   //ReactDOM.findDOMNode(this.refs.post_message).focus();

//   const newTitle = this.getTitle.value;
//   const newMessage = this.getMessage.value;
//   const data = {
//     newTitle,
//     newMessage
//   };
//   this.props.dispatch({ type: "UPDATE", id: post.id, data: data });
//   this.getTitle.value = "";
//   this.getMessage.value = "";
// };

const mapStateToProps = state => {
  console.log("hi ", state.filter(post => post.editing === true));
  return {
    post: state.filter(post => post.editing === true)
  };
};
export default connect(mapStateToProps)(PostForm);
//export default connect()(handleEdit);
