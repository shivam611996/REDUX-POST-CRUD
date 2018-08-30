import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  render() {
    document.getElementById("pt").value = this.props.post.title;
    document.getElementById("pm").value = this.props.post.message;
    return <span />;
  }
}
export default connect()(EditComponent);
