import React, { Component } from "react";
import { connect } from "react-redux";
//import PostForm from "./PostForm";

// export const handleEdit = () => {
//   //e.preventDefault();
//   document.getElementById("post_title").value = this.props.post.title;
//   document.getElementById("post_message").value = this.props.post.message;

//   const newTitle = this.refs.getTitle.value;
//   const newMessage = this.refs.getMessage.value;
//   const data = {
//     newTitle,
//     newMessage
//   };
//   this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
//   document.getElementById("post_title").value = "";
//   document.getElementById("post_message").value = "";
//   // document.getElementById("post_button").value = "Post";
// };
class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
    document.getElementById("post_title").value = "";
    document.getElementById("post_message").value = "";
    // document.getElementById("post_button").value = "Post";
  };

  render() {
    document.getElementById("pt").value = this.props.post.title;
    document.getElementById("pm").value = this.props.post.message;
    return (
      //  <div key={this.props.post.id} className="post">
      // {
      // <PostForm
      //   ref={t => {
      //     this.getTitle = t;
      //   }}
      //   ref={m => {
      //     this.getMessage = m;
      //   }}
      // />

      /*<input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post.message}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form> */
      // }
      //{" "}
      // </div>
      <span />
    );
  }
}
export default connect()(EditComponent);
