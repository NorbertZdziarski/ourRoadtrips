import React, { useState } from 'react';

function FileUpload({userId}) {
    const [selectedFile, setSelectedFile] = useState(null);

    console.log('----M------');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // kod, który wykorzystuje plik
        console.log(selectedFile);
    };

    return (
        <div className="addFile">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}
export default FileUpload;
//
// -----------------------zapis json server
//
// import React, { useState } from 'react';
//
// function FileUpload() {
//     const [selectedFile, setSelectedFile] = useState(null);
//
//     const handleFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };
//
//     const handleUpload = () => {
//         if (selectedFile) {
//             const formData = new FormData();
//             formData.append('file', selectedFile);
//
//             fetch('/save-json', {
//                 method: 'POST',
//                 body: formData,
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('File saved:', data);
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                 });
//         }
//     };
//
//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload</button>
//         </div>
//     );
// }
