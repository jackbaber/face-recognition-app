import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = () => (
    <div className>
        <p className="f3 white-60 center">
            {"Upload an image to detect faces"}
        </p>
        <div className="center">
            <div className="form center pa4 shadow-3 br3">
                <input className="f4 pa2 w-70 center br3" type="text"/>
                <button 
                    className="w-25 grow f4 link ph3 pv2 dib br3"
                >Detect</button>
            </div>
        </div>
   </div>
)

export default ImageLinkForm;