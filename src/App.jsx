// import { useState } from 'react';
// import SunEditor from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css';

// const App = () => {
//   const [content, setContent] = useState('');
//   const [formattedContent, setFormattedContent] = useState('');

//   const handleChange = (content) => {
//     setContent(content);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     const formattedText = content
//     setFormattedContent(formattedText);
//     console.log("Formatted Content:", formattedText);
//   };



//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div>
//         <p>My Other Contents</p>
//         <form onSubmit={handleSave}>
//           <SunEditor  onChange={handleChange} />
//           <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
//             Save
//           </button>
//         </form>
//         <div>
//           <p>Formatted Content:</p>
//           <pre>{formattedContent}</pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const App = () => {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const inputRef = useRef(null);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ];
  
  const modules = {
    toolbar: toolbarOptions
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-4 bg-white shadow-md rounded">
        <ReactQuill
          ref={inputRef}
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <button 
          type="submit" 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
      {submittedValue && (
        <div className="mt-6 w-full max-w-4xl p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
          <div dangerouslySetInnerHTML={{ __html: submittedValue }} />
        </div>
      )}
    </div>
  );
};

export default App;
