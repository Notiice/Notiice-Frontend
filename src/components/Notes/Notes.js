import React, { useState } from 'react';
import './Notes.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

function Notes() {
    const [value, setValue] = useState('');

    return (
        <div className='notes-container'>
            <div className='notes-header'>
                <p>Notes</p>
            </div>
            <div className='notes-inline-editor'>
               <ReactQuill theme="bubble" value={value} onChange={setValue} />
            </div>
        </div>
    );
}

export default Notes;
