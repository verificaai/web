import { useState, useEffect } from 'react'
import './style.css'
import VerificaAI from '../../assets/VerificaAI-about.svg'

function Topics() {
  const buttons = ['VerificaAI', 'Problema', 'Solução',
                  'Ações', 'Resultados', 'Considerações'
                 ];
  const [content, setContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function changeTopic(index){
    setCurrentIndex(index);
  }

  useEffect(() => {
    fetch('/Sobre.txt')
      .then(res => res.text())
      .then(res => {
        const lines = res.split('\n');

        const data = lines.map(line => {
          const pos = line.indexOf(';');
          return {
            title: line.slice(0, pos),
            text: line.slice(pos + 1)
          };
        });

        setContent(data);
      });
  }, []);

  return (
    <div className='about'>
      <img src={VerificaAI} alt='VerificaAI'/>

      <div className='topics'>
        {buttons.map((btn, i) =>(
          <button key={i} onClick={() => changeTopic(i)}>
            {btn}
          </button>
        ))}
      </div>

      <div className='text'>
        {content[currentIndex] && (
          <div>
            <h1>{content[currentIndex].title}</h1>
            <p>{content[currentIndex].text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Topics
