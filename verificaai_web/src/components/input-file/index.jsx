import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

function About() {
  return (
    <div className='upload'>
        <input type="file" onChange={handleFileChange}/>

        <button onClick={handleUpload}>Verificar</button>
    </div>
  )
}

export default About
