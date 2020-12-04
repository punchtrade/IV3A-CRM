import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

 
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
    axios.open("POST", "http://localhost:5000/upload", true);
    axios.send(fd);
  }
 
  render() {
 
    let $imagePreview = (<div className="previewText image-container">Veuillez sélectionner une image pour l'aperçu</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
    }
 
    return (
      <div className="Upload" width="200px" position="center">
         <br></br>
         <br></br>
         <br></br>
         <input type="file" width="50" name="files" onChange={this.fileChangedHandler} />
         <br></br>
         <Button 
         variant="outlined"
         size="large"
         color="default"
         disabledElevation
         type="submit" 
         className="btn btn-primary-green" 
         onClick={this.submit} > Envoyer </Button>
         <br></br>
         <br></br>
         <br></br>
         { $imagePreview }
         <div>
        </div>
      </div>
    );
  }
}
export default Upload;

