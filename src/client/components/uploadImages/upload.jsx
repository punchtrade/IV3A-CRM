// import React, { useRef, useState } from 'react';
// import axios from 'axios';

// function Upload() {

//     const [file, setFile] = useState(''); // storing the uploaded file
//     // storing the recived file from backend
//     const [data, getFile] = useState({ _id: "", path: "" });
//     const [progress, setProgess] = useState(0); // progess bar
//     const el = useRef(); // accesing input element

//     const handleChange = (e) => {
//         setProgess(0)
//         const file = e.target.files[0]; // accessing file
//         console.log(file);
//         setFile(file); // storing file
//     }

//     const uploadFile = () => {
//         const formData = new FormData();
//         formData.append('file', file); // appending file
//         axios.post('http://localhost:9000/upload', formData, {
//             onUploadProgress: (ProgressEvent) => {
//                 let progress = Math.round(
//                 ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
//                 setProgess(progress);
//             }
//         })
//         .then(res => {
//             console.log(res);
//             getFile({ _id: res.data._id,
//                       path: 'http://localhost:9000/upload'
//                     //   + res.data.path
//                     })
//         })
//         .catch(err => console.log(err))
//       };

//     return (
//         <div>
//             <div className="file-upload">
//                 <input type="file"
//                        ref={el}
//                       onChange={handleChange} />
//                 <div className="progessBar" style={{ width: progress }}>
//                    {progress}
//                 </div>
//                 <button onClick={uploadFile} className="upbutton">
//                 Envoyer
//                 </button>
//             <hr />
//             {/* displaying received image*/}
//             <div className="container" style={{width: "600px"}}>
//             {/* {data.path &&  */}
//             <img src={data.path} alt={data._id} />
//             {/* } */}
//             </div>
//             </div>
//         </div>
//     );
// }

// export default Upload;

// import React, { useState, useEffect } from "react";
// import UploadService from "../../../services/FileUploadService";

// const Upload = () => {
//   const [selectedFiles, setSelectedFiles] = useState(undefined);
//   const [currentFile, setCurrentFile] = useState(undefined);
//   const [progress, setProgress] = useState(0);
//   const [message, setMessage] = useState("");
//   const selectFile = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const [fileInfos, setFileInfos] = useState([]);
//   const upload = () => {
//     let currentFile = selectedFiles[0];

//     setProgress(0);
//     setCurrentFile(currentFile);

//     UploadService.upload(currentFile, (event) => {
//       setProgress(Math.round((100 * event.loaded) / event.total));
//     })
//       .then((response) => {
//         setMessage(response.data.message);
//         return UploadService.getFiles();
//       })
//       .then((files) => {
//         setFileInfos(files.data);
//       })
//       .catch(() => {
//         setProgress(0);
//         setMessage("Could not upload the file!");
//         setCurrentFile(undefined);
//       });

//     setSelectedFiles(undefined);
//   };
//   useEffect(() => {
//     UploadService.getFiles().then((response) => {
//       setFileInfos(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       {currentFile && (
//         <div className="progress">
//           <div
//             className="progress-bar progress-bar-info bg-success progress-bar-striped progress-bar-animated"
//             role="progressbar"
//             aria-valuenow={progress}
//             aria-valuemin="0"
//             aria-valuemax="100"
//             style={{ width: progress + "%" }}
//           >
//             {progress}%
//           </div>
//         </div>
//       )}

//       <label className="btn btn-primary-green">
//         <input type="file" onChange={selectFile} />
//       </label>
//       <button
//         className="btn btn-primary-green"
//         type="submit"
//         disabled={!selectedFiles}
//         onClick={upload}
//       >
//         Envoyer
//       </button>

//       <div className="alert alert-light" role="alert">
//         {message}
//       </div>

//       <div className="card">
//         <div className="card-header">Liste des fichiers</div>
//         <ul className="list-group-item list-group-item-action flex-column align-items-start">
//           {/* {fileInfos &&
//             fileInfos.map((file, index) => (
//                 <li className="list-group-item" key={index}>
//                 <a href={file.url}>{file.name}</a>
//               </li>
//             ))} */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Upload;

// import axios from 'axios'; 

// import React,{Component} from 'react'; 

// class Upload extends Component { 

// 	state = { 

// 	// Initially, no file is selected 
//   selectedFile: null,
//   imagePreviewUrl: null
// 	}; 
	
// 	// On file select (from the pop up) 
// 	onFileChange = event => { 
	
// 	// Update the state 
// 	this.setState({ selectedFile: event.target.files[0] }); 
	
// 	}; 
	
// 	// On file upload (click the upload button) 
// 	onFileUpload = () => { 
	
// 	// Create an object of formData 
// 	const formData = new FormData(); 
	
// 	// Update the formData object 
// 	formData.append( 
// 		"myFile", 
// 		this.state.selectedFile, 
// 		this.state.selectedFile.name 
// 	); 
	
// 	// Details of the uploaded file 
// 	console.log(this.state.selectedFile); 
	
// 	// Request made to the backend api 
// 	// Send formData object 
// 	axios.post("http://localhost:9000/upload", formData); 
// 	}; 
	
// 	// File content to be displayed after 
// 	// file upload is complete 
// 	fileData = () => { 
	
// 	if (this.state.selectedFile) { 
		
// 		return ( 
// 		<div> 
// 			<h2>File Details:</h2> 
// 			<p>File Name: {this.state.selectedFile.name}</p> 
// 			<p>File Type: {this.state.selectedFile.type}</p> 
// 			{/* <p> 
// 			Last Modified:{" "} 
// 			{this.state.selectedFile.lastModifiedDate.toDateString()} 
// 			</p>  */}
// 		</div> 
// 		); 
// 	} else { 
// 		return ( 
// 		<div> 
// 			<br /> 
// 			<h4>Choose before Pressing the Upload button</h4> 
// 		</div> 
// 		); 
// 	} 
// 	}; 
	
// 	render() { 
//     let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
//     if (this.state.imagePreviewUrl) {
//       $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
//     }
// 	return ( 
// 		<div> 
// 			<h1> 
// 			File Upload
// 			</h1> 
// 			<div> 
// 				<input  type="file" onChange={this.onFileChange} /> 
// 				<button className="btn btn-primary-green" type="submit" onClick={this.onFileUpload}> 
// 				Upload 
// 				</button> 
//         { $imagePreview }
// 			</div> 
// 		{this.fileData()} 
// 		</div> 
// 	); 
// 	} 
// } 

// export default Upload; 

import React, { Component } from 'react';
// import axios from 'axios';
 
class Upload extends Component {
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
      </div>
    );
  }
}
export default Upload;

