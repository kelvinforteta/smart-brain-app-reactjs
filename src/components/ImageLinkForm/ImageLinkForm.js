import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Brain will detect your faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type={'text'} placeholder={'Picture Link'} onChange={onInputChange} />
                    <button onClick={onPictureSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>

            </div>
        </div>
    );
};

export default ImageLinkForm;