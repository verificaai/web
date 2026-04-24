import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Upload from '../../assets/Upload.svg'

function Verify() {
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
          
          <img src={Upload}/>

          <h1>
            Carregar Vídeo
          </h1>
        </div>
    </div>
  )
}

export default Verify
