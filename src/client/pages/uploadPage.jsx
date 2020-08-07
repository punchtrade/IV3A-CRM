import React from "react";
import axios from "axios";
import Upload from "../components/uploadImages/upload";
import { withRouter } from "react-router-dom";

class UploadPage extends React.Component {
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/upload");
    console.log(this.state);
    axios
      .post("http://localhost:9000/upload", this.state, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container" style={{ width: "600px" }}>
        <div style={{ margin: "20px" }}>
          <Upload />
        </div>
      </div>
    );
  }
}

export default withRouter(UploadPage);
