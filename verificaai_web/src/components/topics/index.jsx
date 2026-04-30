import { useState, useEffect } from 'react'
import './style.css'
import VerificaAI from '../../assets/VerificaAI-about.svg'

function Topics() {
  const botoes = ['VerificaAI', 'Problema', 'Solução',
                  'Ações', 'Resultados', 'Considerações'
                 ];
  const [conteudos, setConteudos] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);

  function changeTopic(indice){
    setIndiceAtual(indice);
  }

  useEffect(() => {
    fetch('/Sobre.txt')
      .then(res => res.text())
      .then(res => {
        const linhas = res.split('\n');

        const dados = linhas.map(linha => {
          const posicao = linha.indexOf(';');
          return {
            titulo: linha.slice(0, posicao),
            texto: linha.slice(posicao + 1)
          };
        });

        setConteudos(dados);
      });
  }, []);

  return (
    <div className='sobre'>
      <img src={VerificaAI}/>

      <div className='topicos'>
        {botoes.map((botao, i) =>(
          <button key={i} onClick={() => changeTopic(i)}>
            {botao}
          </button>
        ))}
      </div>

      <div className='texto'>
        {conteudos[indiceAtual] && (
          <div>
            <h1>{conteudos[indiceAtual].titulo}</h1>
            <p>{conteudos[indiceAtual].texto}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Topics
