// import React, { Fragment, useState } from 'react';
// import Message from './message';
// import Progress from './progress';
// import axios from 'axios';

// const Upload = () => {
// const [file, setFile] = useState('');
// const [filename, setFilename] = useState('Choose File');
// const [uploadedFile, setUploadedFile] = useState({});
// const [message, setMessage] = useState('');
// const [uploadPercentage, setUploadPercentage] = useState(0);

// const onChange = e => {
// setFile(e.target.files[0]);
// setFilename(e.target.files[0].name);
// };

// const onSubmit = async e => {
// e.preventDefault();
// const formData = new FormData();
// formData.append('file', file);

// try {
//   const res = await axios.post("http://localhost:9000/upload/" , formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     onUploadProgress: progressEvent => {
//       setUploadPercentage(
//         parseInt(
//           Math.round((progressEvent.loaded * 100) / progressEvent.total)
//         )
//       );

//       // Clear percentage
//       setTimeout(() => setUploadPercentage(0), 10000);
//     }
//   });

//   const { fileName, filePath } = res.data;

//   setUploadedFile({ fileName, filePath });

//   setMessage('File Uploaded');
// } 
// catch (err) {
//   if (err.response.status === 500) {
//     setMessage('There was a problem with the server');
//   } else {
//     setMessage(err.response.data.msg);
//   }
// }
// };

// return (
// <Fragment>
//   {message ? <Message msg={message} /> : null}
//   <form onSubmit={onSubmit}>
//     <div className='custom-file mb-4'>
//       <input
//         type='file'
//         className='custom-file-input'
//         id='customFile'
//         onChange={onChange}
//       />
//       <label className='custom-file-label' htmlFor='customFile'>
//         {filename}
//       </label>
//     </div>
//     <div className="name-file mb-4">
//       <input
//       tipe='text'
//       className="name-file-input"
//       id="customFile"
//       />
//     </div>

//     <Progress percentage={uploadPercentage} />

//     <input
//       type='submit'
//       value='Upload'
//       className='btn btn-block mt-4'
//     />
//   </form>
//   {uploadedFile ? (
//     <div className='row mt-5'>
//       <div className='col-md-6 m-auto'>
//         <h3 className='text-center'>{uploadedFile.fileName}</h3>
//         <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='scans' />
//       </div>
//     </div>
//   ) : null}
// </Fragment>
// );
// };
// export default Upload;

import React, { useRef, useState } from 'react';
import axios from 'axios';

function Upload() {

    const [file, setFile] = useState(''); // storing the uploaded file    
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });    
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();        
        formData.append('file', file); // appending file
        axios.post('http://localhost:9000/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                      path: 'http://localhost:9000/' + res.data.path})
        }).catch(err => console.log(err))
      };

    return (
        <div>
            <div className="file-upload">
                <input type="file" 
                       ref={el} 
                      onChange={handleChange} />                
                <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
                <button onClick={uploadFile} className="upbutton">                   
                Upload
                </button>
            <hr />
            {/* displaying received image*/}
            {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
}

export default Upload;

