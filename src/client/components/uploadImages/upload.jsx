import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from "react-router-dom";
 
class Upload extends Component {
  constructor() {
    super();
  }

  state =  {
    selectedFile: null,
    imagePreviewUrl: null
  };
 
  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])
 
  }
 
  submit = () => {
 
    var fd = new FormData();
    fd.append('file', this.state.selectedFile);
 
    var axios = new XMLHttpRequest();
 
    axios.onreadystatechange = function() {
      if (this.readyState === 4 || this.status === 200) {
        alert('télécharger!');
      }
    };
    axios.open("POST", "http://localhost:9000/upload", true);
    axios.send(fd);
  }
 
  render() {
 
    let $imagePreview = (<div className="previewText image-container">Veuillez sélectionner une image pour l'aperçu</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
    }
 
    return (
      <div className="Upload">
         <br></br>
         <br></br>
         <br></br>
         <input type="file" name="avatar" onChange={this.fileChangedHandler} />
         <br></br>
         <button type="submit" className="btn btn-primary-green" onClick={this.submit} > Envoyer </button>
         <br></br>
         <br></br>
         <br></br>
         { $imagePreview }
         <div>
          <button
            className="btn btn-primary-green left"
            type="submit"
            value="submit"
            onClick={() => {
              this.props.history.replace("/dashboard");
            }}
          >
            Panel
              </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Upload);

