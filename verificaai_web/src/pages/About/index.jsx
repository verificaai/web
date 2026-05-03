import { useState } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Topics from '../../components/topics'

function About() {
  return (
     <div className='page'>
      <Header/>

      <div className='about-container'>
        <div className='texto'>
          <h1>
          Sobre nós
          </h1>

          <p>
            Descubra como tudo isso é possível, e conheça as pessoas por trás
          </p>
        </div>
        
        <Topics />
      </div>

      <Footer />
     </div>
  )
}

export default About
