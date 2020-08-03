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

import React, { useState, useEffect } from "react";
import UploadService from "../../../services/FileUploadService";


const Upload = () => {

    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
      };
  
    const [fileInfos, setFileInfos] = useState([]);
    const upload = () => {
        let currentFile = selectedFiles[0];
    
        setProgress(0);
        setCurrentFile(currentFile);
    
        UploadService.upload(currentFile, (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
        })
          .then((response) => {
            setMessage(response.data.message);
            return UploadService.getFiles();
          })
          .then((files) => {
            setFileInfos(files.data);
          })
          .catch(() => {
            setProgress(0);
            setMessage("Could not upload the file!");
            setCurrentFile(undefined);
        });

        setSelectedFiles(undefined);
      };
      useEffect(() => {
        UploadService.getFiles().then((response) => {
          setFileInfos(response.data);
        });
      }, []);
  
    return (
        <div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}
  
        <label className="btn btn-default">
          <input type="file" onChange={selectFile} />
        </label>
        <button
        className="btn"
        type="submit"
        disabled={!selectedFiles}
        onClick={upload}
      >
        Envoyer
      </button>

      <div className="alert alert-light" role="alert">
        {message}
      </div>

      <div className="card">
        <div className="card-header">Liste des fichiers</div>
        <ul className="list-group list-group-flush">
          {/* {fileInfos &&
            fileInfos.map((file, index) => (
              <li className="list-group-item" key={index}>
                <a href={file.url}>{file.name}</a>
              </li>
            ))} */}
        </ul>
      </div>
    </div>
      
    );
  };
  
  export default Upload;



