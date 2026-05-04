import { useState } from 'react'
import './style.css'
import IMG_upload from '../../assets/Upload.svg'

function Upload() {
    function handleFileChange(){
        console.log("a")
    }

    function handleUpload(){
        console.log("b")
    }

    return (
        <div className='upload'>
            <div className='inputFile'>
                <input type="file" onChange={handleFileChange}/>

                <img src={IMG_upload} alt='upload'/>

                <h1>
                    Carregar Vídeo
                </h1>
            </div>
        </div>
    )
}

export default Upload
